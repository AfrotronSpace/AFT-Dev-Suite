'use client';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";


const queryClient = new QueryClient();

export default function TanstackQueryProvider({children}:{children: React.JSX.Element}){
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
