"use server";
export  async function createUser(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if(!username || !password){
    console.log("empty fields")
    return;
  }
  await fetch("http://localhost:3001/api/v1/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  return;
}

export async function checkUser(formdata: FormData) {
  const username = formdata.get("username") as string;
  const password = formdata.get("password") as string;

  if(!username || !password){
    return;
  }

  await fetch("http://localhost:3001/api/v1/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  console.log("user logged in")
  return;
}
