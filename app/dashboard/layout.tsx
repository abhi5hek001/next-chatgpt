"use client"

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <div>MENU</div>
            <div>
                {children}
            </div>
        </div>
    );
}
