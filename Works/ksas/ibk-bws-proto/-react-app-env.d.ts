/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test' | 'local';
    PUBLIC_URL: string;
    REACT_APP_TITLE: string;
    REACT_APP_API_URL: string;
    REACT_APP_MODE: string;
  }
}