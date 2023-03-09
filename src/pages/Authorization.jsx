import React from "react";
import Header from "../components/header/Header";
import MobileHeader from "../components/mobile-header/mobileHeader";
import { useResize } from "../hooks/useResize";

export default function Authorization() {
    const width = useResize();
    return (
        width < 870 ? <MobileHeader /> : <Header />
    )
}