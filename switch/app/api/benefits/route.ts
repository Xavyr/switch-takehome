import { payload } from "@/app/_dbs/database";

const callDatabase = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(payload);
    }, 3000);
  });
};

export async function GET(request: Request) {
  const benefits = await callDatabase()
  
  return new Response(JSON.stringify(benefits), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

