describe("function drinkAbout", function() {


  it("should exist", function() {
     expect(drinkAbout).toBeDefined();
  });

  it("should be defined with one argument", function() {
     expect(drinkAbout.length).toBe(1);
  });

  it("should return a string", function() {
     expect( typeof drinkAbout() ).toBe("string");
  });

  /*
  it("should return a string", function() {
     var returnValue = drinkAbout();
     expect( typeof returnValue ).toBe("string");
  */

  it("should return drink toddy when drinkAbout(13)", function() {
     expect( drinkAbout(13) ).toBe("drink toddy");
  });

  it("should return drink coke when drinkAbout(17)", function() {
     expect( drinkAbout(17) ).toBe("drink coke");
  });

  it("should return drink beer when drinkAbout(20)", function() {
     expect( drinkAbout(20) ).toBe("drink beer");
  });

  it("should return drink whisky when drinkAbout(30)", function() {
     expect( drinkAbout(30) ).toBe("drink whisky");
  });
  
  
});
