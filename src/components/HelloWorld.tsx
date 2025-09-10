"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function HelloWorld() {
  const handleWelcome = () => {
    alert("Welcome to our Hello World app! 🎉");
  };

  return (
    <div className="max-w-4xl mx-auto text-center">
      {/* Main Hello World Card */}
      <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-0 shadow-2xl hover:shadow-3xl dark:shadow-2xl dark:hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
        <CardContent className="p-12">
          {/* Badge */}
          <div className="mb-6">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
              Next.js App
            </Badge>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-7xl font-bold font-poppins bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight">
            Hello World!
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-light max-w-2xl mx-auto leading-relaxed">
            Welcome to a beautifully crafted Hello World application built with modern web technologies
          </p>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 hover:from-blue-100 hover:to-blue-150 dark:hover:from-blue-900/40 dark:hover:to-blue-800/40 transition-all duration-300">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Next.js 15</h3>
              <p className="text-sm text-blue-600 dark:text-blue-400">Latest React framework with App Router</p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 hover:from-purple-100 hover:to-purple-150 dark:hover:from-purple-900/40 dark:hover:to-purple-800/40 transition-all duration-300">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">shadcn/ui</h3>
              <p className="text-sm text-purple-600 dark:text-purple-400">Beautiful, accessible components</p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/30 dark:to-pink-800/30 hover:from-pink-100 hover:to-pink-150 dark:hover:from-pink-900/40 dark:hover:to-pink-800/40 transition-all duration-300">
              <h3 className="font-semibold text-pink-800 dark:text-pink-300 mb-2">Tailwind CSS</h3>
              <p className="text-sm text-pink-600 dark:text-pink-400">Utility-first CSS framework</p>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={handleWelcome}
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started
          </Button>

          {/* Stats */}
          <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-600">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">100%</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Responsive</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">TypeScript</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Type Safe</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">Modern</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">UI/UX</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Info */}
      <div className="mt-8 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          This app demonstrates modern web development practices with a clean, accessible design and theme switching
        </p>
      </div>
    </div>
  );
}