import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
import { MapPin, Users, Filter, Plus, Zap } from 'lucide-react';

interface Institute {
  id: number;
  name: string;
  location: string;
  type: string;
  logo: string;
}

const Institutes: React.FC = () => {
  const [institutes] = useState<Institute[]>([
    {
      id: 1,
      name: "Bharathidasan University",
      location: "Kanchipuram, Highway 500",
      type: "Branches",
      logo: "🏛️"
    },
    {
      id: 2,
      name: "Bharathidasan University",
      location: "Madras, Highway 500",
      type: "Branches",
      logo: "🏛️"
    },
    {
      id: 3,
      name: "Bharathidasan University",
      location: "Kanchipuram, Highway 500",
      type: "Branches",
      logo: "🏛️"
    },
    {
      id: 4,
      name: "Bharathidasan University",
      location: "Madras, Highway 500",
      type: "Branches",
      logo: "🏛️"
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
         <Button
            variant='outline'
            className='bg-[#68B39F] text-white border-[#68B39F] hover:bg-[#2D6974] rounded-tl-xl rounded-br-xl rounded-bl-none rounded-tr-none'
          >
           <Filter className="w-4 h-4" />
            Show Filter
          </Button>
          <Button  className='bg-[#68B39F] text-white border-[#68B39F] hover:bg-[#2D6974] rounded-tl-xl rounded-br-xl rounded-bl-none rounded-tr-none'>
            <Plus className="w-4 h-4" />
            Add Institute  
          </Button>
        </div>

        {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
                {/* Total Institute */}
              <Card className="text-black  rounded-tl-xl rounded-br-xl rounded-bl-none rounded-tr-none shadow-xl hover:bg-[#2D6974] hover:text-white hover:shadow-md transition-all relative overflow-hidden">
        <CardContent className="p-8">
          <div className="flex items-center justify-center mb-6">
            <Zap className="w-8 h-8" />
          </div>
          <div className="text-center text-lg font-medium mb-4">Total Institute</div>
          <div className="flex items-center justify-center">
            <div className="relative w-20 h-20">
              <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="rgba(0,0,0,0.3)"
                  strokeWidth="8"
                  fill="none"
                  className="group-hover:stroke-white transition-colors"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="pink"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${45 * 2.51} ${(100 - 45) * 2.51}`}
                  strokeLinecap="round"
                  className="group-hover:stroke-white transition-colors"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold">45%</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>


                {/* Active Institute */}
              <Card className="group shadow-xl rounded-tl-xl rounded-br-xl rounded-bl-none rounded-tr-none transition-all relative overflow-hidden hover:bg-[#2D6974] hover:shadow-md">
            <CardContent className="p-8 text-black group-hover:text-white">
             
              <div className="flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                </div>
              </div>

              
              <div className="text-lg text-center font-medium mb-4">
                Active Institute
              </div>
             <div className="flex items-center justify-center">
                <div className="relative w-12 h-12">
                  <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#e5e7eb"
                      strokeWidth="12"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#8b5cf6"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${9 * 2.51} ${(100 - 9) * 2.51}`}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span className="text-2xl font-bold text-purple-600 group-hover:text-white ml-2">9%</span>
              </div>
            </CardContent>
          </Card>

                {/* Blocked Institute */}
                <Card className="group shadow-xl rounded-tl-xl rounded-br-xl rounded-bl-none rounded-tr-none transition-all relative overflow-hidden hover:bg-[#2D6974] hover:shadow-md">
            <CardContent className="p-8">
             
              <div className="flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                </div>
              </div>
              <div className="text-lg text-center font-medium mb-4 group-hover:text-white text-gray-700">
                Blocked Institute
              </div>

              <div className="flex items-center justify-center">
                <div className="relative w-12 h-12">
                  <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#e5e7eb"
                      strokeWidth="12"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#eab308"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${25 * 2.51} ${(100 - 25) * 2.51}`}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span className="text-2xl font-bold text-yellow-600 group-hover:text-white">
                  25%
                </span>
              </div>
            </CardContent>
          </Card>
              </div>

        {/* Institute List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {institutes.map((institute, index) => (
            <Card key={institute.id} className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                 
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold shadow-md">
                    🏛️
                  </div>
                  
                 
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg mb-3">
                      {institute.name}
                    </h3>
                    
                    <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{institute.location}</span>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{institute.type}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-gray-600 border-gray-300 hover:bg-gray-50 px-4"
                      >
                        Plan
                      </Button>
                      <Button 
                        size="sm" 
                        className="bg-teal-600 hover:bg-teal-700 text-white px-4"
                      >
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Institutes;