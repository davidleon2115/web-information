"use client";

import { useState } from 'react';
import { generateProjectSummary } from '@/ai/flows/project-summarizer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles, Upload } from 'lucide-react';

export function ProjectSummarizer() {
  const [file, setFile] = useState<File | null>(null);
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const readFileAsDataURI = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result as string);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) {
      toast({
        title: 'No file selected',
        description: 'Please upload a documentation file to summarize.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    setError('');
    setSummary('');

    try {
      const documentationDataUri = await readFileAsDataURI(file);
      const result = await generateProjectSummary({ documentationDataUri });
      setSummary(result.summary);
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
      setError(errorMessage);
      toast({
        title: 'Error generating summary',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Sparkles className="w-8 h-8 text-primary" />
          <div>
            <CardTitle className="text-2xl">AI Project Summarizer</CardTitle>
            <CardDescription>Upload your project documentation to get a quick summary.</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="documentation">Documentation File</Label>
            <div className="flex gap-2">
              <Input
                id="documentation"
                type="file"
                onChange={handleFileChange}
                className="flex-grow"
                aria-label="Documentation File Upload"
                accept=".txt,.md,.pdf,.docx"
              />
              <Button type="submit" disabled={isLoading || !file}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Summarizing...
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    Generate
                  </>
                )}
              </Button>
            </div>
          </div>
        </form>

        {summary && (
          <div className="mt-6 space-y-2">
            <h3 className="text-lg font-semibold">Generated Summary:</h3>
            <Textarea
              readOnly
              value={summary}
              className="min-h-[200px] bg-muted/50"
              aria-label="Generated Project Summary"
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
