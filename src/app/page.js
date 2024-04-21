'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { molds } from './actions/getMolds'

const HomePage = () => {
  return (
    <>
      <h1>Thoughtspace Disc Stamps</h1>

      {/* Distance Drivers */}
      <Accordion.Root type="multiple" collapsible="true">
        <Accordion.Item value="distanceDrivers">
          <Accordion.Header>
            <Accordion.Trigger className="AccordionTrigger">Distance Drivers</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            {/* Distance Drivers Molds */}
            <Accordion.Root type="multiple" collapsible="true">
              {molds.distanceDrivers.map((mold) => (
                <Accordion.Item value={mold.mold} key={mold.mold}>
                  <Accordion.Header>
                    <Accordion.Trigger className="AccordionTrigger">
                      {mold.mold} {mold.speed} | {mold.glide} | {mold.turn} | {mold.fade} {mold.comingSoon && 'Coming Soon'}
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content>…</Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Accordion.Content>
        </Accordion.Item>

        {/* Fairway Drivers */}
        <Accordion.Item value="fairwayDrivers">
          <Accordion.Header>
            <Accordion.Trigger className="AccordionTrigger">Fairway Drivers</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            {/* Fairway Drivers Molds */}
            <Accordion.Root type="multiple" collapsible="true">
              {molds.fairwayDrivers.map((mold) => (
                <Accordion.Item value={mold.mold} key={mold.mold}>
                  <Accordion.Header>
                    <Accordion.Trigger className="AccordionTrigger">
                      {mold.mold} {mold.speed} | {mold.glide} | {mold.turn} | {mold.fade} {mold.comingSoon && 'Coming Soon'}
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content>…</Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Accordion.Content>
        </Accordion.Item>

        {/* Midranges */}
        <Accordion.Item value="midranges">
          <Accordion.Header>
            <Accordion.Trigger className="AccordionTrigger">Midranges</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            {/* Midranges Molds */}
            <Accordion.Root type="multiple" collapsible="true">
              {molds.midranges.map((mold) => (
                <Accordion.Item value={mold.mold} key={mold.mold}>
                  <Accordion.Header>
                    <Accordion.Trigger className="AccordionTrigger">
                      {mold.mold} {mold.speed} | {mold.glide} | {mold.turn} | {mold.fade} {mold.comingSoon && 'Coming Soon'}
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content>…</Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Accordion.Content>
        </Accordion.Item>

        {/* Putters */}
        <Accordion.Item value="putters">
          <Accordion.Header>
            <Accordion.Trigger className="AccordionTrigger">Putters</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            {/* Putters Molds */}
            <Accordion.Root type="multiple" collapsible="true">
              {molds.putters.map((mold) => (
                <Accordion.Item value={mold.mold} key={mold.mold}>
                  <Accordion.Header>
                    <Accordion.Trigger className="AccordionTrigger">
                      {mold.mold} {mold.speed} | {mold.glide} | {mold.turn} | {mold.fade} {mold.comingSoon && 'Coming Soon'} {mold.bead ? 'Beaded' : 'Beadless'}
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content>…</Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </>
  )
}

export default HomePage
