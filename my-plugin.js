export default function (context, options) {
    return {
      name: 'my-plugin',
      translateContent({content, translationFiles}) {
        const myTranslationFile = translationFiles.find(
          (f) => f.path === 'myTranslationFile',
        );
        return {
          ...content,
          someContentLabel: myTranslationFile.someContentLabel.message,
        };
      },
    };
  }