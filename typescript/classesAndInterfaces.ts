interface Directory {
    addFile: (name: string) => void;
    config: Config;
  }
  interface Config {
    default: DefaultConfig
  }
  interface DefaultConfig {
    encoding: string;
    permissions: string;
      }
  
  
  class DesktopDirectory implements Directory {
    config = {
      default: {
        encoding: 'utf-8',
        permissions: 'drw-rw-rw-',
      }
    }
  
    addFile(name: string) {
      console.log(`Adding file: ${name}`);
    }
  
    showPreview(name: string) {
      console.log(`Opening preview of file: ${name}`);
    }
  }
  
  const Desktop = new DesktopDirectory();
  
  console.log(Desktop.config);

  interface Developer {
    code: () => void;
  }
  
  interface Human extends Developer {
    name?: string, //? means optional
    hobbies: string[] // if you don't know what exactly the data you get back but the type like
    // {
    //     'shopping': 150,
    //     'food': 210,
    //     'utilities': 100
    //   }
    // you can use [category: string]: number
  }
  
  const me: Human = { 
    code: () => console.log('Headphones on. Coffee brewed. Editor open.'),
    name: 'Corrina', 
    hobbies: ['Building rockets']
  }
  
  me.code();