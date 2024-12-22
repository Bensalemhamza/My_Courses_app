import React from "react";
import SizeButton from "./buttuns/buttons_Sizes";
import IconButton from "./buttuns/icon_Buttons";
import SimpleButton from "./buttuns/simple_Buttons";
import Button from "./buttuns/buttons";
import img1 from "../images/icons/timelapse_24px.png"
import img2 from "../images/icons/medium.png"
import img3 from "../images/icons/small.png"
import img4 from "../images/icons/lg_gray.png"
import img5 from "../images/icons/medium_gray.png"
import img6 from "../images/icons/small_gray.png"
import img7 from "../images/icons/lg_disabled.png"
import img8 from "../images/icons/medium_disabled.png"
import img9 from "../images/icons/small_desabled.png"

const Buttons = () => {
  return (
    <div className="app space-y-2">
      <h1>React Button Components</h1>

      <section className="space-y-2 ">
        <h2>Buttons with Sizes</h2>
          <div className="flex space-x-6">
          <SizeButton size="large" iconSrc={img1}>
              Large Button
            </SizeButton>
          
          <SizeButton size="medium" iconSrc={img2}>
            Medium Button
          </SizeButton>
          
          <SizeButton size="small" iconSrc={img3}>
            Small Button
          </SizeButton>
        </div>

      </section>

      <section className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Button Icons Demo</h1>

      <div className="flex space-x-6">
        {/* Enabled Button Example */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Enabled Button</h2>
        <Button label="Save Changes" iconSrc={img1} type="enabled" size="large" />
        <Button label="Save Changes" iconSrc={img2} type="enabled" size="medium" />
        <Button label="Save Changes" iconSrc={img3} type="enabled" size="small" />
      </div>

      {/* Hover State Example */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Hover Button</h2>
        <Button label="Delete" iconSrc={img1} type="hover" size="large" />
        <Button label="Delete" iconSrc={img2} type="hover" size="medium" />
        <Button label="Delete" iconSrc={img3} type="hover" size="small" />
      </div>


      {/* Enabled1 Button Example */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Enabled Button</h2>
        <Button label="Save Changes" iconSrc={img4} type="enabled1" size="large" />
        <Button label="Save Changes" iconSrc={img5} type="enabled1" size="medium" />
        <Button label="Save Changes" iconSrc={img6} type="enabled1" size="small" />
      </div>
      {/* Hover1 State Example */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Hover Button</h2>
        <Button label="Delete" iconSrc={img4} type="hover1" size="large" />
        <Button label="Delete" iconSrc={img5} type="hover1" size="medium" />
        <Button label="Delete" iconSrc={img6} type="hover1" size="small" />
      </div>
      

      {/* Disabled Button Example */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Disabled Button</h2>
        <Button label="Submit" iconSrc={img7} type="disabled" size="large" disabled={true} />
        <Button label="Submit" iconSrc={img8} type="disabled" size="medium" disabled={true} />
        <Button label="Submit" iconSrc={img9} type="disabled" size="small" disabled={true} />
      </div>

      </div>
    </section>


      <section className="space-y-2">
        <h2>Icon Buttons</h2>
        <div className="flex space-x-4">

          <div className="space-x-2">
            <h2>Icon Buttons</h2>
          <IconButton iconSrc={img1} type="enabled" size="large" />
          <IconButton iconSrc={img2} type="enabled" size="medium"/>
          <IconButton iconSrc={img3} type="enabled" size="small"/>
          </div>

          <div className="block space-x-2">
            <h2>Icon Buttons</h2>
          <IconButton iconSrc={img1} type="hover" size="large" />
          <IconButton iconSrc={img2} type="hover" size="medium"/>
          <IconButton iconSrc={img3} type="hover" size="small"/>
          </div>

          <div className="space-x-2">
            <h2>Icon Buttons</h2>
          <IconButton iconSrc={img4} type="enabled1" size="large" />
          <IconButton iconSrc={img5} type="enabled1" size="medium"/>
          <IconButton iconSrc={img6} type="enabled1" size="small"/>
          </div>

          <div className="space-x-2">
            <h2>Icon Buttons</h2>
          <IconButton iconSrc={img4} type="hover1"  size="large" />
          <IconButton iconSrc={img5} type="hover1" size="medium"/>
          <IconButton iconSrc={img6} type="hover1" size="small"/>
          </div>

          <div className="space-x-2">
            <h2>Icon Buttons</h2>
          <IconButton iconSrc={img7} type="disabled" disabled size="large" />
          <IconButton iconSrc={img8} type="disabled" disabled size="medium"/>
          <IconButton iconSrc={img9} type="disabled" disabled size="small"/>
          </div>

        </div>

      </section>

      <section className="space-y-2 ">
        <h2>Simple Buttons</h2>
        <div className="flex space-x-6">
        <div className="space-y-6">
          <SimpleButton label="Simple Button" type="enabled" size="large" />
          <SimpleButton label="Simple Button" type="enabled" size="medium" />
          <SimpleButton label="Simple Button" type="enabled" size="small" />
        </div>

        <div className="space-y-6">
          <SimpleButton label="Simple Button" type="hover" size="large" />
          <SimpleButton label="Simple Button" type="hover" size="medium" />
          <SimpleButton label="Simple Button" type="hover" size="small" />
        </div>

        <div className="space-y-6">
          <SimpleButton label="Simple Button" type="enabled1" size="large" />
          <SimpleButton label="Simple Button" type="enabled1" size="medium" />
          <SimpleButton label="Simple Button" type="enabled1" size="small" />
        </div>

        <div className="space-y-6">
          <SimpleButton label="Simple Button" type="hover1" size="large" />
          <SimpleButton label="Simple Button" type="hover1" size="medium" />
          <SimpleButton label="Simple Button" type="hover1" size="small" />
        </div>

        <div className="space-y-6">
          <SimpleButton label="Simple Button" type="disabled" disabled size="large" />
          <SimpleButton label="Simple Button" type="disabled" disabled size="medium" />
          <SimpleButton label="Simple Button" type="disabled" disabled size="small" />
        </div>
        </div>
      </section>
    </div>
  );
};

export default Buttons