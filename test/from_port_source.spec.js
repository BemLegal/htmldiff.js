describe('The specs from the ruby source project', function(){
  var cut;

  beforeEach(function(){
    cut = require('../js/htmldiff');
  });

  it('should diff text', function(){
    var diff = cut('a word is here', 'a nother word is there');
    expect(diff).equal('a<ins> nother</ins> word ' +
      'is <del>here</del><ins>there</ins>');
  });

  it("should insert a letter and a space", function(){
    var diff = cut('a c', 'a b c');
    expect(diff).equal("a <ins>b </ins>c");
  });

  it("should remove a letter and a space", function(){
    var diff = cut('a b c', 'a c');
    diff.should == "a <del>b </del>c";
  });

  it("should change a letter", function(){
    var diff = cut('a b c', 'a d c');
    expect(diff).equal("a <del>b</del>" +
      "<ins>d</ins> c");
  });
}); // describe('The specs from the ruby source project')
