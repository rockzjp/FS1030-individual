import React from 'react';
import BlogContent from './BlogContent';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';



function Blog() {
  return (
    <div>
     <ThemeProvider theme={theme}>
      <BlogContent />
    </ThemeProvider>
    
    </div>
  );
}

export default Blog;
