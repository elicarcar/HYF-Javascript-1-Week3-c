/* Add a property to the object you just created that contains the languages that they have taught you*/
const myHyfTeachers = {
  html_Css_Cli: ["Phillip", "Rob", "Igor"],
  javascript1: "Nick"
};
console.log(myHyfTeachers);

const languages = {
  markupLanguage: "Hyper-Text-Markup-Language",
  programmingLanguage: "JavaScript"
};
Object.assign(myHyfTeachers, languages);
console.log(myHyfTeachers);
