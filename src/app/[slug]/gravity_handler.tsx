"use client";

import { setCookie } from "cookies-next";

export default function GravityHandler() {
    setCookie("rohunji", "yeah");
    return <div />;
}
