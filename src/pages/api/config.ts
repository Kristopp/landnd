const dev = process.env.NODE_ENV !== 'production';
export const server = dev ? 'http://localhost:3000/api/landingPage' : 'https://landnd.vercel.app/api/landingPage'

export default server
