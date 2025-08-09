const backendurl = import.meta.env.VITE_PUBLIC_API_URL;

export const GetImageUrl = (url: string) => {
    const data = url ? backendurl + '/' + url : null;
    return data;
};
