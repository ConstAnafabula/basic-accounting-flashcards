const identificationQuestions = [
  {
    "prompt": "Clay balls in which accounting tokens were often sealed.",
    "answer": "Bullae",
    "category": "History"
  },
  {
    "prompt": "Small objects used in ancient Mesopotamia to represent quantities of goods.",
    "answer": "Accounting tokens",
    "category": "History"
  },
  {
    "prompt": "The ancient region where some of the earliest accounting tokens were found.",
    "answer": "Mesopotamia",
    "category": "History"
  },
  {
    "prompt": "The wedge-shaped writing system used on ancient clay tablets.",
    "answer": "Cuneiform",
    "category": "History"
  },
  {
    "prompt": "The Italian friar associated with the first widely published description of double-entry bookkeeping in 1494.",
    "answer": "Luca Pacioli",
    "category": "History"
  },
  {
    "prompt": "The bookkeeping method in which each transaction affects at least two accounts.",
    "answer": "Double-entry bookkeeping",
    "category": "History"
  },
  {
    "prompt": "The organized record where transactions are first entered chronologically.",
    "answer": "Journal",
    "category": "Accounting records"
  },
  {
    "prompt": "The record that groups transactions by individual accounts.",
    "answer": "Ledger",
    "category": "Accounting records"
  },
  {
    "prompt": "A list of account balances prepared to check whether total debits equal total credits.",
    "answer": "Trial balance",
    "category": "Accounting records"
  },
  {
    "prompt": "A numbered list of the accounts a business uses.",
    "answer": "Chart of accounts",
    "category": "Accounting records"
  },
  {
    "prompt": "The process of transferring journal entries into ledger accounts.",
    "answer": "Posting",
    "category": "Accounting records"
  },
  {
    "prompt": "The accounting record used to summarize assets, liabilities, and equity at a specific date.",
    "answer": "Balance sheet",
    "category": "Financial statements"
  },
  {
    "prompt": "The report showing revenues and expenses over a period.",
    "answer": "Income statement",
    "category": "Financial statements"
  },
  {
    "prompt": "The statement that tracks cash received and cash paid.",
    "answer": "Statement of cash flows",
    "category": "Financial statements"
  },
  {
    "prompt": "The report explaining changes in an owner’s equity during a period.",
    "answer": "Statement of changes in equity",
    "category": "Financial statements"
  },
  {
    "prompt": "Resources controlled by a business as a result of past events.",
    "answer": "Assets",
    "category": "Elements"
  },
  {
    "prompt": "Amounts a business owes to other parties.",
    "answer": "Liabilities",
    "category": "Elements"
  },
  {
    "prompt": "The residual interest in assets after deducting liabilities.",
    "answer": "Equity",
    "category": "Elements"
  },
  {
    "prompt": "Amounts earned from selling goods or providing services.",
    "answer": "Revenue",
    "category": "Elements"
  },
  {
    "prompt": "Costs incurred to earn revenue.",
    "answer": "Expenses",
    "category": "Elements"
  },
  {
    "prompt": "The basic equation: Assets = Liabilities + ____.",
    "answer": "Equity",
    "category": "Elements"
  },
  {
    "prompt": "The left side of a T-account; it commonly increases assets and expenses.",
    "answer": "Debit",
    "category": "Double entry"
  },
  {
    "prompt": "The right side of a T-account; it commonly increases liabilities, equity, and revenue.",
    "answer": "Credit",
    "category": "Double entry"
  },
  {
    "prompt": "The assumption that a business will continue operating into the foreseeable future.",
    "answer": "Going concern",
    "category": "Assumptions"
  },
  {
    "prompt": "The assumption that business transactions are recorded when earned or incurred, not only when cash moves.",
    "answer": "Accrual basis",
    "category": "Assumptions"
  },
  {
    "prompt": "The assumption that a business’s life can be divided into monthly, quarterly, or yearly periods.",
    "answer": "Time-period assumption",
    "category": "Assumptions"
  },
  {
    "prompt": "The concept that a business is accounted for separately from its owner.",
    "answer": "Entity concept",
    "category": "Principles"
  },
  {
    "prompt": "The concept of using the same accounting methods from period to period.",
    "answer": "Consistency",
    "category": "Principles"
  },
  {
    "prompt": "The principle of recording acquired assets at their actual acquisition cost.",
    "answer": "Historical cost",
    "category": "Principles"
  },
  {
    "prompt": "The principle of recognizing expenses in the same period as the related revenue.",
    "answer": "Matching principle",
    "category": "Principles"
  },
  {
    "prompt": "The principle that significant information capable of influencing decisions should be reported.",
    "answer": "Materiality",
    "category": "Principles"
  },
  {
    "prompt": "The principle that relevant information should be included in financial reports or notes.",
    "answer": "Adequate disclosure",
    "category": "Principles"
  },
  {
    "prompt": "The quality of information being supported by evidence and capable of independent verification.",
    "answer": "Objectivity",
    "category": "Principles"
  },
  {
    "prompt": "The quality of information that can influence a user’s decision.",
    "answer": "Relevance",
    "category": "Principles"
  },
  {
    "prompt": "An independent examination of financial information and records.",
    "answer": "Auditing",
    "category": "Branches"
  },
  {
    "prompt": "The routine recording of basic financial transactions.",
    "answer": "Bookkeeping",
    "category": "Branches"
  },
  {
    "prompt": "The accounting branch focused on preparing reports for external users.",
    "answer": "Financial accounting",
    "category": "Branches"
  },
  {
    "prompt": "The accounting branch that provides information to managers for internal decisions.",
    "answer": "Management accounting",
    "category": "Branches"
  },
  {
    "prompt": "The branch concerned with collecting and controlling the costs of products or services.",
    "answer": "Cost accounting",
    "category": "Branches"
  },
  {
    "prompt": "The process of meeting obligations imposed by tax laws.",
    "answer": "Taxation",
    "category": "Branches"
  },
  {
    "prompt": "The organization whose name expands to Philippine Institute of Certified Public Accountants.",
    "answer": "PICPA",
    "category": "Organizations"
  },
  {
    "prompt": "The global standard-setting board whose initials are IASB.",
    "answer": "International Accounting Standards Board",
    "category": "Organizations"
  },
  {
    "prompt": "The international standards commonly abbreviated as IFRS.",
    "answer": "International Financial Reporting Standards",
    "category": "Organizations"
  },
  {
    "prompt": "The group primarily interested in the return earned on their investments.",
    "answer": "Investors",
    "category": "Users"
  },
  {
    "prompt": "People or institutions interested in whether a borrower can repay debts on time.",
    "answer": "Lenders",
    "category": "Users"
  },
  {
    "prompt": "People inside an organization who use accounting information to plan and control operations.",
    "answer": "Internal users",
    "category": "Users"
  },
  {
    "prompt": "People outside daily operations who use financial reports to make decisions.",
    "answer": "External users",
    "category": "Users"
  },
  {
    "prompt": "The ability of a business to meet its short-term obligations.",
    "answer": "Liquidity",
    "category": "Analysis"
  },
  {
    "prompt": "The ability of a business to generate profit.",
    "answer": "Profitability",
    "category": "Analysis"
  },
  {
    "prompt": "The ability of a business to meet its long-term obligations.",
    "answer": "Solvency",
    "category": "Analysis"
  },
  {
    "prompt": "The process of identifying, measuring, and communicating economic information for decisions.",
    "answer": "Accounting",
    "category": "Fundamentals"
  },
  {
    "prompt": "The phase of accounting that sorts transactions into appropriate accounts.",
    "answer": "Classifying",
    "category": "Accounting process"
  },
  {
    "prompt": "The phase of accounting that combines financial data into reports.",
    "answer": "Summarizing",
    "category": "Accounting process"
  },
  {
    "prompt": "The phase of accounting that evaluates results to support judgments and decisions.",
    "answer": "Interpreting",
    "category": "Accounting process"
  },
  {
    "prompt": "The unit of money used to measure and record transactions in the Philippines.",
    "answer": "Philippine peso",
    "category": "Assumptions"
  },
  {
    "prompt": "A business form owned by one individual.",
    "answer": "Sole proprietorship",
    "category": "Business forms"
  },
  {
    "prompt": "A business form owned by two or more persons who agree to operate together.",
    "answer": "Partnership",
    "category": "Business forms"
  },
  {
    "prompt": "A business organization legally distinct from its owners.",
    "answer": "Corporation",
    "category": "Business forms"
  },
  {
    "prompt": "The amount by which revenues exceed expenses.",
    "answer": "Net income",
    "category": "Results"
  },
  {
    "prompt": "The amount by which expenses exceed revenues.",
    "answer": "Net loss",
    "category": "Results"
  }
];
