"use client";

import { useAuth } from '@clerk/nextjs';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { userId, isLoaded } = useAuth();  
    const router = useRouter();  

    useEffect(() => {
        if (isLoaded && !userId) {
            router.push("/sign-in");  
        }
    }, [isLoaded, userId, router]);

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div>MENU</div>
            <div>
                {children}
            </div>
        </div>
    );
}
