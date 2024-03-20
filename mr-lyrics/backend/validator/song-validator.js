const { z } = require('zod');

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

const songValidator = z.object({
  songname: z.string({ required_error: 'Song name is required' }).trim(),

  singername: z.string({ required_error: 'singer name is required' }).trim(),

  musiclabel: z.string({ required_error: 'music label is required' }).trim(),

  releaseddate: z.date({ required_error: 'Date is required' }).trim(),

  lyrics: z.string({ required_error: 'lyrics is required' }).trim(),

  url: z.string({ required_error: 'url is required' }).trim(),

  image: z.imageValidator({ required_error: 'image is required' }).trim(),
});

module.exports = songValidator;
