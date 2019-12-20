export class FAQController {

    getFAQ() {
        return [
          {
            "question": "BIOS don`t see my HDD",
            "keywords": ["BIOS","don`t see","HDD"],
            "answer": "Check disk connection."
          },
          {
            "question": "Can`t read or write data from HDD",
            "keywords": ["read","write","HDD"],
            "answer": "Read/write mechanism is damaged. Please, create data backup and replace damaged details."
          },
          {
            "question": "System can`t see my HDD",
            "keywords": ["system","can`t see","HDD"],
            "answer": "Please, replace system board flex."
          },
          {
            "question": "HDD doesn`t work correctly. I think it has bad-sectors",
            "keywords": ["bad-sectors","HDD", "doesn`t work"],
            "answer": "Please, remove HDD from broadcast adn use self-test technology."
          },
          {
            "question": "Service info is corrupted",
            "keywords": ["service","info","corrupted"],
            "answer": "Please, check your HDD on program level."
          }
        ]
    }
}
