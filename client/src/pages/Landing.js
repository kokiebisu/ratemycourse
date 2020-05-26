"use strict";
exports.__esModule = true;
exports.Landing = void 0;
var React = require("react");
/**
 * Components
 */
var Navbar_1 = require("../components/shared/Navbar");
var Header_1 = require("../components/Landing/Header");
var Cando_1 = require("../components/Landing/Cando");
var About_1 = require("../components/Landing/About");
var Footer_1 = require("../components/shared/Footer");
exports.Landing = function () {
    return (<>
      <Navbar_1.Navbar />
      <Header_1.HeaderSection />
      <Cando_1.CandoSection />
      <About_1.AboutSection />
      <Footer_1.Footer />
    </>);
};
