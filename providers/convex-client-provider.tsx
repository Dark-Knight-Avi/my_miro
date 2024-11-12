"use client"
import React from "react";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL

const convex = new ConvexReactClient(convexUrl);

interface ConvexReactClientProviderProps {
    children: React.ReactNode
}

export const ConvexReactClientProvider = ({
    children
}: ConvexReactClientProviderProps) => {
    return (
          <ClerkProvider>
            <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
                {children}
            </ConvexProviderWithClerk>
          </ClerkProvider>
      );
}