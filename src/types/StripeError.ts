interface StripeError {
    statusCode: number;
    type: string;
    message: string;
    code?: string;
    param?: string;
  }
  
  export default StripeError;