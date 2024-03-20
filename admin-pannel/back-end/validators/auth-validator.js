const { z } = require('zod');

///creating an object schema
const imageValidator = z.string().refine(
  (value) => {
    // Example: Check if the value is a valid Base64 string
    // This is a very basic check and might need to be adjusted based on your specific requirements
    const base64Regex =
      /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/;
    return base64Regex.test(value);
  },
  {
    message: 'Image must be a valid Base64-encoded string',
    path: ['image'],
  }
);

const signupSchema = z.object({
  username: z
    .string({ required_error: 'Name is required' })
    .trim()
    .min(3, { message: 'Name must be at least 3 chatacters' })
    .max(255, { message: 'Name must not be more than 255 characters' }),

  email: z
    .string({ required_error: 'Email is required' })
    .trim()
    .email({ message: 'Invalid email addrerss' })
    .min(3, { message: 'Email must be at least of 3 characters' })
    .max(255, { message: 'Email must not be more than 255 characters' }),

  phone: z
    .string({ required_error: 'Phone is required' })
    .trim()
    .min(10, { message: 'Phone must be at least 10 chatacters' })
    .max(20, { message: 'Phone must not be more than 20 characters' }),

  password: z
    .string({ required_error: 'Password is required' })
    .trim()
    .min(7, { message: 'password must be at least 7 chatacters' })
    .max(1024, { message: 'password cannot be more than 1024 characters' }),

  username: z
    .string({ required_error: 'Name is required' })
    .trim()
    .min(3, { message: 'Name must be at least 3 chatacters' })
    .max(255, { message: 'Name must not be more than 255 characters' }),
});

module.exports = signupSchema;
