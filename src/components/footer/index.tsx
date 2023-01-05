// Create blank footer component to be filled in later

import React from 'react';

function Footer(): JSX.Element {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 mt-16 bg-neutral-900 ">
            <div className="space-y-4 text-xs">
                <h5 className="font-bold">ABOUT</h5>
                <p>How Landnd works</p>
                <p>Newsroom</p>
                <p>Investors</p>
            </div>

            <div className="space-y-4 text-xs">
                <h5 className="font-bold">COMMUNITY</h5>
                <p>Accessibility</p>
                <p>This is not a real site</p>
                <p>Learn and evolve</p>
            </div>

            <div className="space-y-4 text-xs">
                <h5 className="font-bold">HOST</h5>
                <p>PalusWeb</p>
                <p>Presents</p>
                <p>Join now</p>
            </div>

            <div className="space-y-4 text-xs">
                <h5 className="font-bold">SUPPORT</h5>
                <p>Help center</p>
                <p>Newsroom</p>
                <p>Investors</p>
            </div>

        </div>
    );
}

export default Footer;