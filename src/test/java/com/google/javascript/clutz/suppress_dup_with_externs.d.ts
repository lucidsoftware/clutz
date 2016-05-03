declare namespace ಠ_ಠ.clutz.dup {
  class C extends C_Instance {
  }
  class C_Instance {
    private noStructuralTyping_: any;
    foo (a : string ) : boolean ;
  }
}
declare namespace ಠ_ಠ.clutz.goog {
  function require(name: 'dup.C'): typeof ಠ_ಠ.clutz.dup.C;
}
declare module 'goog:dup.C' {
  import alias = ಠ_ಠ.clutz.dup.C;
  export default alias;
}
