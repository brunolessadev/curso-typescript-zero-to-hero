export {};

interface FechResponse<T> {
    data: T;
    status: number;
    statusText: string;
    headers: Record<string, string>;
}

async function fechJson<T>(url: string): Promise<FechResponse<T>>{
    const response = await fetch(url);
    const headers: Record<string, string> = {};

    response.headers.forEach((value, key) => {
        headers[key] = value;
    });

    const data = await response.json();
    return {
        data: data as T,
        status: response.status,
        statusText: response.statusText,
        headers
    };
}

(async () => {
    const response = await fechJson<{ completed: boolean }>("https://jsonplaceholder.typicode.com/todos/1");
    console.log(response.data.completed);
})();