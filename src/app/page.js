'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { molds } from './actions/getMolds'

const HomePage = () => {
  return (
    <>
      <h1>Thoughtspace Disc Stamps</h1>

      {/* Distance Drivers */}
      <Accordion.Root type="multiple" collapsible>
        <Accordion.Item value="distanceDrivers">
          <Accordion.Header>
            <Accordion.Trigger className="AccordionTrigger">Distance Drivers</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            <h2>Distance Drivers</h2>

            {/* Distance Drivers Molds */}
            <Accordion.Root type="multiple" collapsible>
              {molds.distanceDrivers.map((mold) => (
                <Accordion.Item value={mold.mold} key={mold.mold}>
                  <Accordion.Header>
                    <Accordion.Trigger className="AccordionTrigger">
                      {mold.mold} [{mold.speed} | {mold.glide} | {mold.turn} | {mold.fade}] {mold.comingSoon && 'Coming Soon'}
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
            <h2>Fairway Drivers</h2>

            {/* Fairway Drivers Molds */}
            <Accordion.Root type="multiple" collapsible>
              {molds.fairwayDrivers.map((mold) => (
                <Accordion.Item value={mold.mold} key={mold.mold}>
                  <Accordion.Header>
                    <Accordion.Trigger className="AccordionTrigger">
                      {mold.mold} [{mold.speed} | {mold.glide} | {mold.turn} | {mold.fade}] {mold.comingSoon && 'Coming Soon'}
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
            <h2>Midranges</h2>

            {/* Midranges Molds */}
            <Accordion.Root type="multiple" collapsible>
              {molds.midranges.map((mold) => (
                <Accordion.Item value={mold.mold} key={mold.mold}>
                  <Accordion.Header>
                    <Accordion.Trigger className="AccordionTrigger">
                      {mold.mold} [{mold.speed} | {mold.glide} | {mold.turn} | {mold.fade}] {mold.comingSoon && 'Coming Soon'}
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
            <h2>Putters</h2>

            {/* Putters Molds */}
            <Accordion.Root type="multiple" collapsible>
              {molds.putters.map((mold) => (
                <Accordion.Item value={mold.mold} key={mold.mold}>
                  <Accordion.Header>
                    <Accordion.Trigger className="AccordionTrigger">
                      {mold.mold} [{mold.speed} | {mold.glide} | {mold.turn} | {mold.fade}] {mold.comingSoon && 'Coming Soon'} {mold.beaded ? 'Beaded' : 'Beadless'}
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
