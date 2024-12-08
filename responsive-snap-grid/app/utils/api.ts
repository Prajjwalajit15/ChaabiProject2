export const saveConfiguration = async (data: any) => {
    return fetch("/api/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };
  
  export const fetchConfiguration = async () => {
    const response = await fetch("/api/config");
    return response.json();
  };
  