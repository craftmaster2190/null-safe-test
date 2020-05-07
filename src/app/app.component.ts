import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  nany = NaN;
  nanyObj: any = {
    foo: this.nany,
    arr: [{ foo: this.nany }],
    func: () => this.nany,
  };
  nanyObjElvis = () => this.nanyObj?.foo;
  nanyObjElvisDotBar = () => this.nanyObj?.foo?.bar;
  nanyObjElvisArr = () => this.nanyObj?.arr?.[0]?.foo;
  nanyObjElvisArrDotBar = () => this.nanyObj?.arr?.[0]?.foo?.bar;
  nanyObjElvisShortCircut = () => this.nanyObj.foo?.not?.a.property;
  nanyObjFunc = () => this.nanyObj.func();

  zero = 0;
  zeroObj: any = {
    foo: this.zero,
    arr: [{ foo: this.zero }],
    func: () => this.zero,
  };
  zeroObjElvis = () => this.zeroObj?.foo;
  zeroObjElvisDotBar = () => this.zeroObj?.foo?.bar;
  zeroObjElvisArr = () => this.zeroObj?.arr?.[0]?.foo;
  zeroObjElvisArrDotBar = () => this.zeroObj?.arr?.[0]?.foo?.bar;
  zeroObjElvisShortCircut = () => this.zeroObj.foo?.not?.a.property;
  zeroObjFunc = () => this.zeroObj.func();

  falsey = false;
  falseyObj: any = {
    foo: this.falsey,
    arr: [{ foo: this.falsey }],
    func: () => this.falsey,
  };
  falseyObjElvis = () => this.falseyObj?.foo;
  falseyObjElvisDotBar = () => this.falseyObj?.foo?.bar;
  falseyObjElvisArr = () => this.falseyObj?.arr?.[0]?.foo;
  falseyObjElvisArrDotBar = () => this.falseyObj?.arr?.[0]?.foo?.bar;
  falseyObjElvisShortCircut = () => this.falseyObj.foo?.not?.a.property;
  falseyObjFunc = () => this.falseyObj.func();

  emptyString = "";
  emptyStringObj: any = {
    foo: this.emptyString,
    arr: [{ foo: this.emptyString }],
    func: () => this.emptyString,
  };
  emptyStringObjElvis = () => this.emptyStringObj?.foo;
  emptyStringObjElvisDotBar = () => this.emptyStringObj?.foo?.bar;
  emptyStringObjElvisArr = () => this.emptyStringObj?.arr?.[0]?.foo;
  emptyStringObjElvisArrDotBar = () => this.emptyStringObj?.arr?.[0]?.foo?.bar;
  emptyStringObjElvisShortCircut = () =>
    this.emptyStringObj.foo?.not?.a.property;
  emptyStringObjFunc = () => this.emptyStringObj.func();

  nully = null;
  nullyObj: any = {
    foo: this.nully,
    arr: [{ foo: this.nully }],
    func: () => this.nully,
  };
  nullyObjElvis = () => this.nullyObj?.foo;
  nullyObjElvisDotBar = () => this.nullyObj?.foo?.bar;
  nullyObjElvisArr = () => this.nullyObj?.arr?.[0]?.foo;
  nullyObjElvisArrDotBar = () => this.nullyObj?.arr?.[0]?.foo?.bar;
  nullyObjElvisShortCircutA = () => this.nullyObj.foo?.not.a.property;
  nullyObjElvisShortCircut = () => this.nullyObj.foo?.not?.a.property;
  nullyObjFunc = () => this.nullyObj.func();
  nullyObjFuncFoo = () => this.nullyObj.func()?.foo();

  undefinedy = undefined;
  undefinedyObj: any = {
    foo: this.undefinedy,
    arr: [{ foo: this.undefinedy }],
    func: () => this.undefinedy,
  };
  undefinedyObjElvis = () => this.undefinedyObj?.foo;
  undefinedyObjElvisDotBar = () => this.undefinedyObj?.foo?.bar;
  undefinedyObjElvisArr = () => this.undefinedyObj?.arr?.[0]?.foo;
  undefinedyObjElvisArrDotBar = () => this.undefinedyObj?.arr?.[0]?.foo?.bar;
  undefinedyObjElvisShortCircutA = () => this.undefinedyObj.foo?.not.a.property;
  undefinedyObjElvisShortCircut = () => this.undefinedyObj.foo?.not?.a.property;
  undefinedyObjFunc = () => this.undefinedyObj.func();
  undefinedyObjFuncFoo = () => this.undefinedyObj.func()?.foo();

  voidy = () => void 0;
  invokeVoidy = () => this.voidy?.();
  invokeVoidyNotAFunction = () => this.voidy()?.notAFunction();

  jsFalseyValues = [
    this.nany,
    this.zero,
    this.falsey,
    this.emptyString,
    this.nully,
    this.undefinedy,
  ];

  abstractEquals(a, b) {
    const val = a == b;
    if (val) {
      console.log(a, "==", b, "=>", val);
    }

    return val;
  }

  concreteEquals(a, b) {
    const val = a === b;
    if (val) {
      console.log(a, "===", b, "=>", val);
    }

    return val;
  }
}
