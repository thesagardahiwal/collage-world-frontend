import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ShowCaserProbs {
    titleOne: string;
    titleTwo: string;
    componentOne: React.JSX.Element;
    componentTwo: React.JSX.Element;
}

function ShowCaser({titleOne, titleTwo, componentOne, componentTwo} : ShowCaserProbs) {
  return (
    <Tabs defaultValue="one" className="w-full">
          <TabsList>
              <TabsTrigger value="one">{titleOne}</TabsTrigger>
              <TabsTrigger value="two">{titleTwo}</TabsTrigger>
          </TabsList>
          <TabsContent value="one">
            {componentOne}
          </TabsContent>
          <TabsContent value="two">
              {componentTwo}
          </TabsContent>
      </Tabs>
  )
}

export default ShowCaser