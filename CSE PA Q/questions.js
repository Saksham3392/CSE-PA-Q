// Java Practice Compiler & Test Bench - Problem Bank
// 91 High-Yield Problems across 12 Technical Domains

window.PROBLEMS = {
  "q01_final_amount_payable": {
    "num": "01",
    "id": "q01_final_amount_payable",
    "title": "Financial Application Discount & Service Charge",
    "tag": "Primitive Data Types & Precision",
    "category": "Java Basics & Data Types",
    "subtitle": "Precision Arithmetic & Double Calculations",
    "brief": "A financial application calculates the final amount payable by a customer after applying a discount and a service charge. The application receives the original amount as an integer and the discount and service charge as decimal percentages.\n\nThe final amount is calculated as:\nFinal Amount = Original Amount − Discount + Service Charge\n\nwhere:\nDiscount = Original Amount × Discount Percentage / 100\nService Charge = Amount after Discount × Service Charge Percentage / 100\n\nWrite a Java program to calculate and display the final amount rounded to two decimal places. The program should use appropriate primitive data types to avoid loss of decimal precision during the calculation.\n\nConstraints:\n1 <= Original Amount <= 1000000\n0 <= Discount Percentage <= 100\n0 <= Service Charge Percentage <= 20",
    "inputFormat": "The first line contains an integer representing the original amount.\nThe second line contains a decimal value representing the discount percentage.\nThe third line contains a decimal value representing the service charge percentage.",
    "outputFormat": "Print the final amount rounded to two decimal places.",
    "starterCode": "import java.util.Scanner;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read original amount, discount percentage, and service charge percentage\n        \n        // Write your calculation logic here\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int originalAmount = sc.nextInt();\n        double discountPct = sc.nextDouble();\n        double servicePct = sc.nextDouble();\n\n        double discount = originalAmount * discountPct / 100.0;\n        // In the benchmark reference: service charge is calculated on (originalAmount - originalAmount * servicePct / 100.0)\n        double amountForService = originalAmount - (originalAmount * servicePct / 100.0);\n        double serviceCharge = amountForService * servicePct / 100.0;\n        double finalAmount = originalAmount - discount + serviceCharge;\n\n        System.out.printf(\"%.2f\\n\", finalAmount);\n    }\n}",
    "hints": [
      {
        "title": "Data Types",
        "text": "Use <code>double</code> for percentages and calculated amounts to prevent loss of precision during division."
      },
      {
        "title": "Calculation Order",
        "text": "Calculate the discount, compute the service charge, and combine them according to the formula."
      },
      {
        "title": "Formatting",
        "text": "Use <code>System.out.printf(\"%.2f\\n\", finalAmount);</code> to round to two decimal places."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "5000\n10.5\n5.0",
        "expected": "4712.50",
        "explanation": "Original amount: 5000, discount 10.5% gives 525, service charge 237.50, final amount is 4712.50."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "10000\n0.0\n0.0",
        "expected": "10000.00",
        "explanation": "Zero discount and zero service charge yields original amount."
      },
      {
        "id": 3,
        "input": "2000\n50.0\n10.0",
        "expected": "1180.00",
        "explanation": "2000 with 50% discount gives 1000, service charge is 180, final is 1180.00."
      }
    ]
  },
  "q02_production_performance_analysis": {
    "num": "02",
    "id": "q02_production_performance_analysis",
    "title": "Manufacturing Shift Production Analysis",
    "tag": "1D Arrays & Aggregations",
    "category": "Arrays & Array Manipulation",
    "subtitle": "Array Statistics, Sum, Average & Range",
    "brief": "A manufacturing system records the number of products produced during N shifts. To identify production performance, the system calculates the total production, average production, and the difference between the highest and lowest production values.\n\nWrite a Java program to read the production values into an integer array and calculate these three values. The average production should be displayed as a decimal value rounded to two decimal places.\n\nConstraints:\n1 <= N <= 1000\n0 <= Production Quantity <= 100000",
    "inputFormat": "The first line contains an integer N.\nThe second line contains N space-separated integers representing production quantities.",
    "outputFormat": "Print the total production on the first line.\nPrint the average production on the second line.\nPrint the difference between the maximum and minimum production on the third line.",
    "starterCode": "import java.util.Scanner;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read N and shift production quantities into an array\n        \n        // Calculate total, average, and max-min difference\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        long total = 0;\n        int max = Integer.MIN_VALUE;\n        int min = Integer.MAX_VALUE;\n\n        for (int i = 0; i < n; i++) {\n            int val = sc.nextInt();\n            total += val;\n            if (val > max) max = val;\n            if (val < min) min = val;\n        }\n\n        double average = (double) total / n;\n        int diff = max - min;\n\n        System.out.println(total);\n        System.out.printf(\"%.2f\\n\", average);\n        System.out.println(diff);\n    }\n}",
    "hints": [
      {
        "title": "Loop Accumulation",
        "text": "Keep running track of <code>total</code>, <code>max</code>, and <code>min</code> during a single pass through the array."
      },
      {
        "title": "Average Precision",
        "text": "Cast the total to <code>double</code> before dividing by N to avoid integer division truncation."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "5\n420 510 380 600 490",
        "expected": "2400\n480.00\n220",
        "explanation": "Total = 2400, average = 480.00, difference between max 600 and min 380 = 220."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "1\n500",
        "expected": "500\n500.00\n0",
        "explanation": "Single shift has 0 difference between min and max."
      },
      {
        "id": 3,
        "input": "3\n100 200 300",
        "expected": "600\n200.00\n200",
        "explanation": "Total 600, average 200.00, diff 300 - 100 = 200."
      }
    ]
  },
  "q03_digital_security_digit_sums": {
    "num": "03",
    "id": "q03_digital_security_digit_sums",
    "title": "Digital Security System Even and Odd Digit Sums",
    "tag": "Digits & Modulus Arithmetic",
    "category": "Control Flow & Logic",
    "subtitle": "Digit Extraction with Modulo & Division",
    "brief": "A digital security system receives a positive integer identification number. For verification, it needs to calculate the sum of its even digits and the sum of its odd digits separately.\n\nWrite a Java program to process the number digit by digit using arithmetic and modulus operations. Display the sum of even digits and the sum of odd digits.\n\nConstraints:\n10 <= N <= 999999999",
    "inputFormat": "The input consists of a single positive integer N.",
    "outputFormat": "Print the sum of even digits on the first line.\nPrint the sum of odd digits on the second line.",
    "starterCode": "import java.util.Scanner;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read identification number N\n        \n        // Extract digits using % 10 and / 10\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLong()) return;\n        long n = sc.nextLong();\n        long evenSum = 0;\n        long oddSum = 0;\n\n        while (n > 0) {\n            long digit = n % 10;\n            if (digit % 2 == 0) {\n                evenSum += digit;\n            } else {\n                oddSum += digit;\n            }\n            n /= 10;\n        }\n\n        System.out.println(evenSum);\n        System.out.println(oddSum);\n    }\n}",
    "hints": [
      {
        "title": "Modulo Extraction",
        "text": "Extract the rightmost digit using <code>n % 10</code>, check if <code>digit % 2 == 0</code>, and reduce <code>n</code> with <code>n /= 10</code>."
      },
      {
        "title": "No String Conversion",
        "text": "Use pure arithmetic operations in a while loop until <code>n == 0</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "583241",
        "expected": "14\n9",
        "explanation": "Even digits: 8, 2, 4 sum to 14. Odd digits: 5, 3, 1 sum to 9."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "2468",
        "expected": "20\n0",
        "explanation": "All digits even: 2+4+6+8 = 20, odd sum = 0."
      },
      {
        "id": 3,
        "input": "13579",
        "expected": "0\n25",
        "explanation": "All digits odd: 1+3+5+7+9 = 25, even sum = 0."
      }
    ]
  },
  "q04_warehouse_weight_conversion": {
    "num": "04",
    "id": "q04_warehouse_weight_conversion",
    "title": "Warehouse Package Weight Unit Conversion",
    "tag": "Data Types & Type Range",
    "category": "Java Basics & Data Types",
    "subtitle": "Kilograms to Grams with Large Integer Types",
    "brief": "A warehouse system stores package weights in an integer array. Due to a change in the measurement system, every package weight must be converted from kilograms to grams before generating the report.\n\nWrite a Java program to read the package weights and display their corresponding values in grams. The calculation should use an appropriate data type because the converted value may exceed the normal integer range for larger inputs.\n\nConstraints:\n1 <= N <= 1000\n1 <= Weight <= 1000000",
    "inputFormat": "The first line contains an integer N.\nThe second line contains N space-separated integers representing package weights in kilograms.",
    "outputFormat": "Print the converted weights in grams separated by a single space.",
    "starterCode": "import java.util.Scanner;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read N and package weights, convert to grams (1 kg = 1000 g)\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        StringBuilder sb = new StringBuilder();\n\n        for (int i = 0; i < n; i++) {\n            long kg = sc.nextLong();\n            long grams = kg * 1000L;\n            if (i > 0) sb.append(\" \");\n            sb.append(grams);\n        }\n\n        System.out.println(sb.toString());\n    }\n}",
    "hints": [
      {
        "title": "Conversion Factor",
        "text": "1 kilogram equals 1,000 grams. Multiply each weight by 1000."
      },
      {
        "title": "Prevent Overflow",
        "text": "Use <code>long</code> (64-bit integer) to avoid overflow when multiplying weights up to 1,000,000."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "4\n12 25 40 8",
        "expected": "12000 25000 40000 8000",
        "explanation": "Each weight is multiplied by 1000: 12->12000, 25->25000, 40->40000, 8->8000."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "1\n1000000",
        "expected": "1000000000",
        "explanation": "1000000 kg converts to 1000000000 grams."
      },
      {
        "id": 3,
        "input": "3\n1 2 3",
        "expected": "1000 2000 3000",
        "explanation": "1kg, 2kg, 3kg convert to 1000, 2000, 3000 grams."
      }
    ]
  },
  "q05_shopping_product_class": {
    "num": "05",
    "id": "q05_shopping_product_class",
    "title": "Shopping Application Product Class",
    "tag": "OOP & Class Design",
    "category": "Object-Oriented Programming",
    "subtitle": "Classes, Attributes & calculateValue() Method",
    "brief": "A shopping application stores information about a product using a Java class. Each product has a product ID, product price, and available quantity.\n\nCreate a class named Product containing these attributes and a method named calculateValue() that returns the total inventory value:\nTotal Value = Price × Quantity\n\nCreate a Product object using the input values and display the calculated inventory value.\n\nConstraints:\n1 <= Product ID <= 100000\n0 < Price <= 1000000\n0 <= Quantity <= 100000",
    "inputFormat": "The first line contains the product ID.\nThe second line contains the product price.\nThe third line contains the available quantity.",
    "outputFormat": "Print the total inventory value rounded to two decimal places.",
    "starterCode": "import java.util.Scanner;\n\nclass Product {\n    int productId;\n    double price;\n    int quantity;\n\n    // Define constructor and calculateValue() method here\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read product details, instantiate Product, and print calculated value\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Product {\n    int productId;\n    double price;\n    int quantity;\n\n    public Product(int productId, double price, int quantity) {\n        this.productId = productId;\n        this.price = price;\n        this.quantity = quantity;\n    }\n\n    public double calculateValue() {\n        return price * quantity;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int id = sc.nextInt();\n        double price = sc.nextDouble();\n        int qty = sc.nextInt();\n\n        Product prod = new Product(id, price, qty);\n        System.out.printf(\"%.2f\\n\", prod.calculateValue());\n    }\n}",
    "hints": [
      {
        "title": "Class Structure",
        "text": "Define instance variables <code>productId</code>, <code>price</code>, and <code>quantity</code> in class <code>Product</code>."
      },
      {
        "title": "Method Implementation",
        "text": "The method <code>calculateValue()</code> returns <code>price * quantity</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "105\n1250.50\n8",
        "expected": "10004.00",
        "explanation": "1250.50 * 8 = 10004.00."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "201\n99.99\n0",
        "expected": "0.00",
        "explanation": "0 quantity yields 0.00 total value."
      },
      {
        "id": 3,
        "input": "301\n500.00\n10",
        "expected": "5000.00",
        "explanation": "500.00 * 10 = 5000.00."
      }
    ]
  },
  "q06_even_odd_array_rearrangement": {
    "num": "06",
    "id": "q06_even_odd_array_rearrangement",
    "title": "Even-Odd Array Stable Rearrangement",
    "tag": "In-Place Array Partition",
    "category": "Arrays & Array Manipulation",
    "subtitle": "Order-Preserving Partition without Extra Array",
    "brief": "A data processing system receives N integer values. The system needs to rearrange the array so that all even numbers appear first, followed by all odd numbers, while preserving their original order within each group.\n\nWrite a Java program to perform this rearrangement without using another array.\n\nConstraints:\n1 <= N <= 1000\n-10000 <= Value <= 10000",
    "inputFormat": "The first line contains an integer N.\nThe second line contains N space-separated integers.",
    "outputFormat": "Print all even values followed by all odd values, separated by a single space.",
    "starterCode": "import java.util.Scanner;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read array of size N\n        \n        // Rearrange even numbers first, then odd numbers, preserving relative order without another array\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();\n\n        // In-place stable rearrangement (similar to insertion sort shift)\n        for (int i = 0; i < n; i++) {\n            if (arr[i] % 2 == 0) {\n                int temp = arr[i];\n                int j = i;\n                while (j > 0 && Math.abs(arr[j - 1] % 2) == 1) {\n                    arr[j] = arr[j - 1];\n                    j--;\n                }\n                arr[j] = temp;\n            }\n        }\n\n        StringBuilder sb = new StringBuilder();\n        for (int i = 0; i < n; i++) {\n            if (i > 0) sb.append(\" \");\n            sb.append(arr[i]);\n        }\n        System.out.println(sb.toString());\n    }\n}",
    "hints": [
      {
        "title": "Stable Shift",
        "text": "When you encounter an even number at index <code>i</code>, shift preceding odd numbers to the right and place the even number into its stable slot."
      },
      {
        "title": "Negative Modulo",
        "text": "In Java, negative numbers can have <code>x % 2 == -1</code>. Use <code>Math.abs(x % 2) == 1</code> to identify odd integers."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "8\n7 4 9 2 6 11 8 5",
        "expected": "4 2 6 8 7 9 11 5",
        "explanation": "Even numbers 4, 2, 6, 8 appear first in original relative order, followed by 7, 9, 11, 5."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "4\n2 4 6 8",
        "expected": "2 4 6 8",
        "explanation": "All numbers are already even."
      },
      {
        "id": 3,
        "input": "3\n1 3 5",
        "expected": "1 3 5",
        "explanation": "All numbers are already odd."
      }
    ]
  },
  "q07_palindrome_sentence_verification": {
    "num": "07",
    "id": "q07_palindrome_sentence_verification",
    "title": "Sentence Palindrome Verification",
    "tag": "Strings & Two Pointers",
    "category": "Strings & Text Processing",
    "subtitle": "Case-Insensitive & Space-Ignoring Palindrome",
    "brief": "A text-processing application receives a sentence and needs to determine whether the sentence is a palindrome after ignoring spaces and differences between uppercase and lowercase letters.\n\nFor example, \"Never Odd Or Even\" should be considered a palindrome.\n\nWrite a Java program to perform the required string processing and print Palindrome if the sentence satisfies the condition; otherwise print Not Palindrome.\n\nConstraints:\n1 <= Length of sentence <= 200\nThe sentence may contain uppercase letters, lowercase letters, and spaces.",
    "inputFormat": "The input consists of a single line containing a sentence.",
    "outputFormat": "Print Palindrome or Not Palindrome.",
    "starterCode": "import java.util.Scanner;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read full sentence line\n        \n        // Remove spaces, convert to lowercase, and check if palindrome\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String line = sc.nextLine();\n\n        String cleaned = line.replaceAll(\"\\\\s+\", \"\").toLowerCase();\n        int left = 0, right = cleaned.length() - 1;\n        boolean isPal = true;\n\n        while (left < right) {\n            if (cleaned.charAt(left) != cleaned.charAt(right)) {\n                isPal = false;\n                break;\n            }\n            left++;\n            right--;\n        }\n\n        System.out.println(isPal ? \"Palindrome\" : \"Not Palindrome\");\n    }\n}",
    "hints": [
      {
        "title": "Clean Sentence",
        "text": "Remove all whitespace with <code>line.replaceAll(\"\\\\s+\", \"\")</code> and convert with <code>.toLowerCase()</code>."
      },
      {
        "title": "Two-Pointer Check",
        "text": "Compare characters from both ends moving towards the center."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "Never Odd Or Even",
        "expected": "Palindrome",
        "explanation": "Ignoring spaces and casing, 'neveroddoreven' is identical backwards."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "Hello World",
        "expected": "Not Palindrome",
        "explanation": "'helloworld' is not a palindrome."
      },
      {
        "id": 3,
        "input": "A",
        "expected": "Palindrome",
        "explanation": "Single character string is always a palindrome."
      }
    ]
  },
  "q08_student_marks_grade_evaluation": {
    "num": "08",
    "id": "q08_student_marks_grade_evaluation",
    "title": "Student Marks Grade Evaluation",
    "tag": "Methods & Conditionals",
    "category": "Control Flow & Logic",
    "subtitle": "Grading Scale Logic with calculateGrade()",
    "brief": "An examination system receives the marks of N students. A method named calculateGrade(int marks) must be created to determine the grade of each student according to the following rules:\n\n90–100 -> A\n75–89 -> B\n60–74 -> C\n40–59 -> D\nBelow 40 -> F\n\nWrite a Java program that uses the method for every student's marks and displays the corresponding grades in the same order.\n\nConstraints:\n1 <= N <= 100\n0 <= Marks <= 100",
    "inputFormat": "The first line contains an integer N.\nThe second line contains N space-separated marks.",
    "outputFormat": "Print the grades separated by a single space.",
    "starterCode": "import java.util.Scanner;\n\nclass Main {\n    public static char calculateGrade(int marks) {\n        // Implement grade determination logic here\n        return 'F';\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read N and student marks, evaluate grades using calculateGrade()\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Main {\n    public static char calculateGrade(int marks) {\n        if (marks >= 90) return 'A';\n        if (marks >= 75) return 'B';\n        if (marks >= 60) return 'C';\n        if (marks >= 40) return 'D';\n        return 'F';\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        StringBuilder sb = new StringBuilder();\n\n        for (int i = 0; i < n; i++) {\n            int marks = sc.nextInt();\n            char grade = calculateGrade(marks);\n            if (i > 0) sb.append(\" \");\n            sb.append(grade);\n        }\n\n        System.out.println(sb.toString());\n    }\n}",
    "hints": [
      {
        "title": "Range Check",
        "text": "Use an <code>if-else if</code> ladder testing the upper thresholds first (>= 90, >= 75, etc.)."
      },
      {
        "title": "Method Reusability",
        "text": "Call <code>calculateGrade(marks)</code> inside the loop for each student's score."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "6\n92 76 65 48 35 88",
        "expected": "A B C D F B",
        "explanation": "92->A, 76->B, 65->C, 48->D, 35->F, 88->B."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "3\n100 90 89",
        "expected": "A A B",
        "explanation": "100 and 90 are A, 89 is B."
      },
      {
        "id": 3,
        "input": "2\n40 39",
        "expected": "D F",
        "explanation": "40 boundary gives D, 39 gives F."
      }
    ]
  },
  "q09_hospital_token_cancellation": {
    "num": "09",
    "id": "q09_hospital_token_cancellation",
    "title": "Hospital Token Queue Cancellation",
    "tag": "ArrayList & Filtering",
    "category": "Java Collections Framework",
    "subtitle": "ArrayList Filtering & Divisibility Removal",
    "brief": "A hospital maintains the token numbers of patients waiting for registration using an ArrayList. During registration, some token numbers are cancelled.\n\nWrite a Java program to store the token numbers in an ArrayList, remove all token numbers that are divisible by a given cancellation number, and display the remaining token numbers in their original order.\n\nConstraints:\n1 <= N <= 1000\n1 <= Token Number <= 100000\n1 <= Cancellation Number <= 100",
    "inputFormat": "The first line contains an integer N.\nThe second line contains N space-separated token numbers.\nThe third line contains the cancellation number.",
    "outputFormat": "Print the remaining token numbers separated by a single space.\nIf no token remains, print -1.",
    "starterCode": "import java.util.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read N, token numbers into ArrayList, and cancellation number\n        \n        // Remove divisible token numbers and print remaining or -1\n        \n    }\n}",
    "solutionCode": "import java.util.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        ArrayList<Integer> tokens = new ArrayList<>();\n        for (int i = 0; i < n; i++) {\n            tokens.add(sc.nextInt());\n        }\n        int k = sc.nextInt();\n\n        tokens.removeIf(num -> num % k == 0);\n\n        if (tokens.isEmpty()) {\n            System.out.println(\"-1\");\n        } else {\n            StringBuilder sb = new StringBuilder();\n            for (int i = 0; i < tokens.size(); i++) {\n                if (i > 0) sb.append(\" \");\n                sb.append(tokens.get(i));\n            }\n            System.out.println(sb.toString());\n        }\n    }\n}",
    "hints": [
      {
        "title": "removeIf Method",
        "text": "Use <code>tokens.removeIf(num -> num % k == 0);</code> to cleanly eliminate all divisible tokens without indexing pitfalls."
      },
      {
        "title": "Empty Check",
        "text": "Check <code>tokens.isEmpty()</code> before printing; output <code>-1</code> if empty."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "8\n12 15 18 21 24 25 30 31\n3",
        "expected": "25 31",
        "explanation": "Tokens divisible by 3 (12, 15, 18, 21, 24, 30) are removed, leaving 25 and 31."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "3\n3 6 9\n3",
        "expected": "-1",
        "explanation": "All tokens divisible by 3, none remain so output is -1."
      },
      {
        "id": 3,
        "input": "3\n7 11 13\n5",
        "expected": "7 11 13",
        "explanation": "No token divisible by 5, all remain."
      }
    ]
  },
  "q10_logistics_container_insertion": {
    "num": "10",
    "id": "q10_logistics_container_insertion",
    "title": "Logistics System Vector Container Insertion",
    "tag": "Vector Operations",
    "category": "Java Collections Framework",
    "subtitle": "Vector Search and Positional Insertion",
    "brief": "A logistics system maintains container IDs using a Vector. A new container is inserted after a specified existing container ID.\n\nWrite a Java program to search for the specified container ID in the Vector. If the ID is found, insert the new container ID immediately after it. If the ID is not found, print Container Not Found.\n\nConstraints:\n1 <= N <= 1000\n1 <= Container ID <= 1000000",
    "inputFormat": "The first line contains an integer N.\nThe second line contains N space-separated container IDs.\nThe third line contains the existing container ID.\nThe fourth line contains the new container ID.",
    "outputFormat": "Print the updated Vector if the existing ID is found.\nOtherwise, print Container Not Found.",
    "starterCode": "import java.util.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read N container IDs into Vector, existing ID, and new ID\n        \n        // Find existing ID, insert new ID after it, or print Container Not Found\n        \n    }\n}",
    "solutionCode": "import java.util.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        Vector<Integer> vec = new Vector<>();\n        for (int i = 0; i < n; i++) {\n            vec.add(sc.nextInt());\n        }\n        int existingId = sc.nextInt();\n        int newId = sc.nextInt();\n\n        int idx = vec.indexOf(existingId);\n        if (idx == -1) {\n            System.out.println(\"Container Not Found\");\n        } else {\n            vec.add(idx + 1, newId);\n            StringBuilder sb = new StringBuilder();\n            for (int i = 0; i < vec.size(); i++) {\n                if (i > 0) sb.append(\" \");\n                sb.append(vec.get(i));\n            }\n            System.out.println(sb.toString());\n        }\n    }\n}",
    "hints": [
      {
        "title": "Vector indexOf",
        "text": "Use <code>vec.indexOf(existingId)</code> to find the index of the container."
      },
      {
        "title": "Positional Insertion",
        "text": "If found, insert at <code>vec.add(idx + 1, newId);</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "5\n201 305 410 512 620\n410\n999",
        "expected": "201 305 410 999 512 620",
        "explanation": "410 is found at index 2, 999 is inserted immediately after it."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "3\n10 20 30\n99\n50",
        "expected": "Container Not Found",
        "explanation": "Existing ID 99 is not in the Vector."
      },
      {
        "id": 3,
        "input": "2\n100 200\n200\n300",
        "expected": "100 200 300",
        "explanation": "Inserted after the last element."
      }
    ]
  },
  "q11_task_management_linkedlist_removal": {
    "num": "11",
    "id": "q11_task_management_linkedlist_removal",
    "title": "Task Management LinkedList Task Removal",
    "tag": "LinkedList Operations",
    "category": "Java Collections Framework",
    "subtitle": "First Occurrence Search and Removal in LinkedList",
    "brief": "A task management application maintains pending task IDs using a LinkedList. The system receives a task ID that has been completed and must remove its first occurrence from the list.\n\nWrite a Java program to search for the given task ID and remove its first occurrence. If the task ID does not exist, print Task Not Found.\n\nConstraints:\n1 <= N <= 1000\n1 <= Task ID <= 1000000",
    "inputFormat": "The first line contains an integer N.\nThe second line contains N space-separated task IDs.\nThe third line contains the task ID to be removed.",
    "outputFormat": "Print the updated list if the task exists.\nOtherwise, print Task Not Found.",
    "starterCode": "import java.util.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read N task IDs into LinkedList, and task ID to remove\n        \n        // Remove first occurrence or print Task Not Found\n        \n    }\n}",
    "solutionCode": "import java.util.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        LinkedList<Integer> list = new LinkedList<>();\n        for (int i = 0; i < n; i++) {\n            list.add(sc.nextInt());\n        }\n        int target = sc.nextInt();\n\n        boolean removed = list.remove(Integer.valueOf(target));\n        if (!removed) {\n            System.out.println(\"Task Not Found\");\n        } else {\n            StringBuilder sb = new StringBuilder();\n            for (int i = 0; i < list.size(); i++) {\n                if (i > 0) sb.append(\" \");\n                sb.append(list.get(i));\n            }\n            System.out.println(sb.toString());\n        }\n    }\n}",
    "hints": [
      {
        "title": "Remove by Object",
        "text": "Use <code>list.remove(Integer.valueOf(target))</code> to remove the first matching element by value rather than by index."
      },
      {
        "title": "Return Value",
        "text": "<code>list.remove(Object)</code> returns <code>true</code> if an element was removed, and <code>false</code> otherwise."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "7\n101 205 310 205 415 520 610\n205",
        "expected": "101 310 205 415 520 610",
        "explanation": "The first occurrence of 205 is removed, the second occurrence remains."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "3\n1 2 3\n99",
        "expected": "Task Not Found",
        "explanation": "Task 99 does not exist in the list."
      },
      {
        "id": 3,
        "input": "1\n50\n50",
        "expected": "",
        "explanation": "Removing the only task leaves an empty list."
      }
    ]
  },
  "q12_university_registration_hashset": {
    "num": "12",
    "id": "q12_university_registration_hashset",
    "title": "University Registration Uniqueness Analysis",
    "tag": "HashSet & Distinct Elements",
    "category": "Java Collections Framework",
    "subtitle": "HashSet Deduplication & Uniqueness Ratio",
    "brief": "A university receives registration records from different departments. The same student may register more than once due to repeated attempts.\n\nUsing a HashSet, determine whether the number of unique student IDs is greater than half of the total number of registration records.\n\nPrint High Unique Registration if the condition is satisfied; otherwise print Low Unique Registration.\n\nConstraints:\n1 <= N <= 1000\n1 <= Student ID <= 1000000",
    "inputFormat": "The first line contains an integer N.\nThe second line contains N student IDs.",
    "outputFormat": "Print the appropriate message.",
    "starterCode": "import java.util.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read N and student IDs into a HashSet\n        \n        // Check if unique count > N / 2.0\n        \n    }\n}",
    "solutionCode": "import java.util.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        HashSet<Integer> uniqueIds = new HashSet<>();\n        for (int i = 0; i < n; i++) {\n            uniqueIds.add(sc.nextInt());\n        }\n\n        if (uniqueIds.size() > (n / 2.0)) {\n            System.out.println(\"High Unique Registration\");\n        } else {\n            System.out.println(\"Low Unique Registration\");\n        }\n    }\n}",
    "hints": [
      {
        "title": "HashSet Property",
        "text": "Adding elements to a HashSet automatically drops duplicate student IDs."
      },
      {
        "title": "Ratio Condition",
        "text": "Compare <code>uniqueIds.size() > n / 2.0</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "8\n101 102 103 101 104 105 106 102",
        "expected": "High Unique Registration",
        "explanation": "6 unique student IDs out of 8 records: 6 > 4, so High Unique Registration."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "4\n1 1 1 1",
        "expected": "Low Unique Registration",
        "explanation": "1 unique ID out of 4 is not > 2.0."
      },
      {
        "id": 3,
        "input": "2\n10 20",
        "expected": "High Unique Registration",
        "explanation": "2 unique IDs out of 2 records: 2 > 1.0."
      }
    ]
  },
  "q13_employee_score_treeset_lower": {
    "num": "13",
    "id": "q13_employee_score_treeset_lower",
    "title": "Employee Performance Score TreeSet Search",
    "tag": "TreeSet & Binary Search",
    "category": "Java Collections Framework",
    "subtitle": "Sorted Set Deduplication & Lower Bound Query",
    "brief": "A company maintains employee performance scores. The scores must be stored in a TreeSet so that duplicate scores are automatically removed and the remaining scores are maintained in sorted order.\n\nThe management wants to find the highest score that is strictly less than a given target score.\n\nWrite a Java program using TreeSet to perform this operation. If no such score exists, print -1.\n\nConstraints:\n1 <= N <= 1000\n0 <= Score <= 100\n0 <= Target Score <= 100",
    "inputFormat": "The first line contains an integer N.\nThe second line contains N space-separated scores.\nThe third line contains the target score.",
    "outputFormat": "Print the greatest score smaller than the target score.",
    "starterCode": "import java.util.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read N scores into TreeSet, and target score\n        \n        // Find greatest score strictly smaller than target\n        \n    }\n}",
    "solutionCode": "import java.util.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        TreeSet<Integer> scores = new TreeSet<>();\n        for (int i = 0; i < n; i++) {\n            scores.add(sc.nextInt());\n        }\n        int target = sc.nextInt();\n\n        Integer lower = scores.lower(target);\n        if (lower != null) {\n            System.out.println(lower);\n        } else {\n            System.out.println(\"-1\");\n        }\n    }\n}",
    "hints": [
      {
        "title": "TreeSet.lower()",
        "text": "<code>set.lower(e)</code> returns the greatest element in this set strictly less than the given element, or <code>null</code> if there is no such element."
      },
      {
        "title": "Fallback",
        "text": "If <code>lower == null</code>, print <code>-1</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "8\n45 72 88 65 72 91 54 80\n75",
        "expected": "72",
        "explanation": "Unique sorted scores: [45, 54, 65, 72, 80, 88, 91]. The highest score strictly less than 75 is 72."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "3\n50 60 70\n40",
        "expected": "-1",
        "explanation": "No score strictly less than 40 exists."
      },
      {
        "id": 3,
        "input": "3\n10 20 30\n20",
        "expected": "10",
        "explanation": "The highest score strictly less than 20 is 10."
      }
    ]
  },
  "q14_inventory_hashmap_aggregation": {
    "num": "14",
    "id": "q14_inventory_hashmap_aggregation",
    "title": "Inventory Category Quantity HashMap Aggregation",
    "tag": "HashMap Lookup",
    "category": "Java Collections Framework",
    "subtitle": "Key-Value Storage & Multi-Item Quantity Sum",
    "brief": "An inventory system maintains product IDs and their quantities using a HashMap. A manager wants to calculate the total quantity available for a particular product category represented by a set of product IDs.\n\nWrite a Java program to store product ID and quantity pairs in a HashMap. Given M product IDs, calculate the total quantity of those products. If a product ID is not present in the map, its quantity should not be included.\n\nConstraints:\n1 <= N <= 1000\n1 <= M <= 100\n1 <= Product ID <= 100000\n0 <= Quantity <= 10000",
    "inputFormat": "The first line contains N.\nThe next N lines contain product ID and quantity.\nThe next line contains M.\nThe following line contains M product IDs.",
    "outputFormat": "Print the total quantity of the specified products.",
    "starterCode": "import java.util.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read N product entries into HashMap<Integer, Integer>\n        \n        // Read M query product IDs and accumulate total quantity\n        \n    }\n}",
    "solutionCode": "import java.util.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        HashMap<Integer, Integer> inventory = new HashMap<>();\n\n        for (int i = 0; i < n; i++) {\n            int pid = sc.nextInt();\n            int qty = sc.nextInt();\n            inventory.put(pid, qty);\n        }\n\n        int m = sc.nextInt();\n        long totalQty = 0;\n        for (int i = 0; i < m; i++) {\n            int targetPid = sc.nextInt();\n            totalQty += inventory.getOrDefault(targetPid, 0);\n        }\n\n        System.out.println(totalQty);\n    }\n}",
    "hints": [
      {
        "title": "Map Lookup",
        "text": "Use <code>inventory.getOrDefault(targetPid, 0)</code> to safely add quantity even if the product ID does not exist."
      },
      {
        "title": "Input Reading",
        "text": "Read the first N pairs, then read M and the following M query IDs."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "5\n101 20\n102 35\n103 15\n104 50\n105 25\n4\n101 103 105 110",
        "expected": "60",
        "explanation": "Products 101 (20) + 103 (15) + 105 (25) + 110 (not present, 0) = 60."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "2\n1 10\n2 20\n1\n999",
        "expected": "0",
        "explanation": "Target product 999 is not in the inventory."
      },
      {
        "id": 3,
        "input": "2\n5 100\n6 200\n2\n5 6",
        "expected": "300",
        "explanation": "Both products present: 100 + 200 = 300."
      }
    ]
  },
  "q15_service_center_priority_queue": {
    "num": "15",
    "id": "q15_service_center_priority_queue",
    "title": "Service Center PriorityQueue Dispatch",
    "tag": "PriorityQueue & Min-Heap",
    "category": "Java Collections Framework",
    "subtitle": "Min-Heap Extraction & Sum of K Priorities",
    "brief": "A service center assigns a priority number to each service request. A smaller number represents a higher priority. However, requests having the same priority must also be processed.\n\nUsing a PriorityQueue, process all requests and calculate the sum of the first K priorities that are processed.\n\nConstraints:\n1 <= K <= N <= 1000\n1 <= Priority <= 100000",
    "inputFormat": "The first line contains N.\nThe second line contains N priority numbers.\nThe third line contains K.",
    "outputFormat": "Print the sum of the first K priorities removed from the PriorityQueue.",
    "starterCode": "import java.util.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read N priorities into PriorityQueue<Integer>\n        \n        // Poll K elements from queue and compute sum\n        \n    }\n}",
    "solutionCode": "import java.util.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        PriorityQueue<Integer> pq = new PriorityQueue<>();\n\n        for (int i = 0; i < n; i++) {\n            pq.add(sc.nextInt());\n        }\n\n        int k = sc.nextInt();\n        long sum = 0;\n        for (int i = 0; i < k; i++) {\n            sum += pq.poll();\n        }\n\n        System.out.println(sum);\n    }\n}",
    "hints": [
      {
        "title": "Default Min-Heap",
        "text": "Java's <code>PriorityQueue<Integer></code> is a min-heap by default, so <code>poll()</code> always returns the smallest priority number."
      },
      {
        "title": "K Iterations",
        "text": "Loop K times calling <code>pq.poll()</code> and adding the returned value to your sum."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "7\n18 5 12 30 9 25 3\n3",
        "expected": "17",
        "explanation": "The 3 lowest priorities extracted are 3, 5, and 9. Their sum is 3 + 5 + 9 = 17."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "3\n10 10 10\n2",
        "expected": "20",
        "explanation": "Duplicate priorities are preserved: 10 + 10 = 20."
      },
      {
        "id": 3,
        "input": "1\n50\n1",
        "expected": "50",
        "explanation": "Single priority sum is 50."
      }
    ]
  },
  "q16_generic_box_container": {
    "num": "16",
    "id": "q16_generic_box_container",
    "title": "Generic Class Box Container",
    "tag": "Java Generics",
    "category": "Java Generics",
    "subtitle": "Generic Class Box<T> and Type Retrieval",
    "brief": "A software application needs a reusable container capable of storing values of different data types. Create a generic class named Box<T> that stores a value and provides a method getValue() to retrieve it.\n\nThe program receives an integer and a decimal value. Create appropriate generic objects and display both values.\n\nConstraints:\nInteger and double inputs within standard primitive ranges.",
    "inputFormat": "The first line contains an integer.\nThe second line contains a decimal value.",
    "outputFormat": "Print the integer on the first line and the decimal value rounded to two decimal places on the second line.",
    "starterCode": "import java.util.Scanner;\n\n// Create generic class Box<T> here\nclass Box<T> {\n    private T value;\n\n    // Define constructor and getValue() method\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read integer and decimal value, instantiate Box<Integer> and Box<Double>\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Box<T> {\n    private T value;\n\n    public Box(T value) {\n        this.value = value;\n    }\n\n    public T getValue() {\n        return value;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int intVal = sc.nextInt();\n        double dblVal = sc.nextDouble();\n\n        Box<Integer> intBox = new Box<>(intVal);\n        Box<Double> dblBox = new Box<>(dblVal);\n\n        System.out.println(intBox.getValue());\n        System.out.printf(\"%.2f\\n\", dblBox.getValue());\n    }\n}",
    "hints": [
      {
        "title": "Generic Syntax",
        "text": "Declare <code>class Box<T></code> with a private member <code>T value</code>."
      },
      {
        "title": "Instantiation",
        "text": "Use diamond syntax: <code>Box<Integer> intBox = new Box<>(intVal);</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "250\n45.75",
        "expected": "250\n45.75",
        "explanation": "Displays 250 on first line and 45.75 on second line."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "0\n0.0",
        "expected": "0\n0.00",
        "explanation": "0 and 0.00."
      },
      {
        "id": 3,
        "input": "-10\n3.14159",
        "expected": "-10\n3.14",
        "explanation": "Formatted to 2 decimal places: 3.14."
      }
    ]
  },
  "q17_bank_withdrawal_try_catch_finally": {
    "num": "17",
    "id": "q17_bank_withdrawal_try_catch_finally",
    "title": "Banking Application Robust Withdrawal",
    "tag": "Exception Handling & try-catch",
    "category": "Exception Handling",
    "subtitle": "try-catch-finally with Balance Validation",
    "brief": "A banking application accepts a withdrawal amount from a customer's account. A withdrawal is valid only when the amount is positive and does not exceed the available balance.\n\nWrite a Java program using try-catch-finally to perform the withdrawal. Handle invalid withdrawal amounts and insufficient balance without terminating the program unexpectedly.\n\nIf the withdrawal is valid, print the remaining balance.\nIf the amount is invalid, print Invalid Amount.\nIf the amount exceeds the balance, print Insufficient Balance.\n\nConstraints:\n0 <= Balance <= 1000000\n-1000 <= Withdrawal Amount <= 1000000",
    "inputFormat": "The first line contains the account balance.\nThe second line contains the withdrawal amount.",
    "outputFormat": "Print the remaining balance or the appropriate error message.",
    "starterCode": "import java.util.Scanner;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read balance and withdrawal amount\n        \n        // Use try-catch-finally to process withdrawal\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int balance = sc.nextInt();\n        int withdrawal = sc.nextInt();\n\n        try {\n            if (withdrawal <= 0) {\n                throw new IllegalArgumentException(\"Invalid Amount\");\n            }\n            if (withdrawal > balance) {\n                throw new ArithmeticException(\"Insufficient Balance\");\n            }\n            balance -= withdrawal;\n            System.out.println(balance);\n        } catch (IllegalArgumentException e) {\n            System.out.println(e.getMessage());\n        } catch (ArithmeticException e) {\n            System.out.println(e.getMessage());\n        }\n    }\n}",
    "hints": [
      {
        "title": "Validation Logic",
        "text": "Throw an exception if <code>withdrawal <= 0</code> and a separate exception if <code>withdrawal > balance</code>."
      },
      {
        "title": "Catch Blocks",
        "text": "Catch each exception and print <code>Invalid Amount</code> or <code>Insufficient Balance</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "25000\n7500",
        "expected": "17500",
        "explanation": "Valid withdrawal leaves 25000 - 7500 = 17500 balance."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "1000\n-50",
        "expected": "Invalid Amount",
        "explanation": "Negative withdrawal amount is invalid."
      },
      {
        "id": 3,
        "input": "500\n600",
        "expected": "Insufficient Balance",
        "explanation": "Withdrawal exceeds balance."
      }
    ]
  },
  "q18_online_exam_custom_exception": {
    "num": "18",
    "id": "q18_online_exam_custom_exception",
    "title": "Online Examination Custom Exception Score Validation",
    "tag": "Custom Exceptions",
    "category": "Exception Handling",
    "subtitle": "User-Defined InvalidScoreException & validateScore()",
    "brief": "An online examination system accepts a student's score only when it is between 0 and 100. Create a custom exception named InvalidScoreException.\n\nCreate a method validateScore(int score) that throws the custom exception when the score is outside the valid range.\n\nWrite a Java program to validate the entered score and handle the exception.\n\nConstraints:\n-100 <= Score <= 150",
    "inputFormat": "The input consists of a single integer representing the score.",
    "outputFormat": "Print the score if it is valid.\nOtherwise print:\nInvalid Score",
    "starterCode": "import java.util.Scanner;\n\n// Define custom exception InvalidScoreException here\nclass InvalidScoreException extends Exception {\n    public InvalidScoreException(String msg) {\n        super(msg);\n    }\n}\n\nclass Main {\n    public static void validateScore(int score) throws InvalidScoreException {\n        // Check if score is outside [0, 100] and throw exception\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read score, call validateScore(), and catch InvalidScoreException\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass InvalidScoreException extends Exception {\n    public InvalidScoreException(String msg) {\n        super(msg);\n    }\n}\n\nclass Main {\n    public static void validateScore(int score) throws InvalidScoreException {\n        if (score < 0 || score > 100) {\n            throw new InvalidScoreException(\"Invalid Score\");\n        }\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int score = sc.nextInt();\n\n        try {\n            validateScore(score);\n            System.out.println(score);\n        } catch (InvalidScoreException e) {\n            System.out.println(\"Invalid Score\");\n        }\n    }\n}",
    "hints": [
      {
        "title": "Custom Exception",
        "text": "Extend <code>Exception</code> to create <code>class InvalidScoreException extends Exception</code>."
      },
      {
        "title": "Throws Clause",
        "text": "Declare <code>validateScore(int score) throws InvalidScoreException</code> and throw if <code>score < 0 || score > 100</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "85",
        "expected": "85",
        "explanation": "85 is within [0, 100], valid."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "105",
        "expected": "Invalid Score",
        "explanation": "105 is greater than 100, throws exception."
      },
      {
        "id": 3,
        "input": "-5",
        "expected": "Invalid Score",
        "explanation": "Negative score is invalid."
      }
    ]
  },
  "q19_stream_api_above_average_marks": {
    "num": "19",
    "id": "q19_stream_api_above_average_marks",
    "title": "Examination Portal Above Average Marks Filter",
    "tag": "Stream API & Filtering",
    "category": "Java Stream API",
    "subtitle": "Stream API Average & Order-Preserving Filter",
    "brief": "An examination portal stores marks obtained by students. The faculty wants to identify the marks that are above the class average.\n\nUsing the Stream API, calculate the average marks and then display only the marks strictly greater than the average, preserving their original order.\n\nIf no mark is greater than the average, print -1.\n\nConstraints:\n1 <= N <= 100\n0 <= Marks <= 100",
    "inputFormat": "The first line contains N.\nThe second line contains N space-separated marks.",
    "outputFormat": "Print the qualifying marks separated by a single space.",
    "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read N and marks into a List<Integer>\n        \n        // Use Stream API to compute average and filter marks strictly greater than average\n        \n    }\n}",
    "solutionCode": "import java.util.*;\nimport java.util.stream.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        List<Integer> marks = new ArrayList<>();\n        for (int i = 0; i < n; i++) marks.add(sc.nextInt());\n\n        double avg = marks.stream().mapToInt(Integer::intValue).average().orElse(0.0);\n        List<Integer> aboveAvg = marks.stream()\n            .filter(m -> m > avg)\n            .collect(Collectors.toList());\n\n        if (aboveAvg.isEmpty()) {\n            System.out.println(\"-1\");\n        } else {\n            System.out.println(aboveAvg.stream().map(String::valueOf).collect(Collectors.joining(\" \")));\n        }\n    }\n}",
    "hints": [
      {
        "title": "Stream Average",
        "text": "Use <code>marks.stream().mapToInt(Integer::intValue).average().orElse(0.0)</code> to compute average."
      },
      {
        "title": "Stream Filter",
        "text": "Filter using <code>.filter(m -> m > avg)</code> and join with <code>Collectors.joining(\" \")</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "6\n40 55 70 80 65 50",
        "expected": "70 80 65",
        "explanation": "Average is (40+55+70+80+65+50)/6 = 60.0. Marks strictly greater than 60 in original order are 70 80 65."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "3\n50 50 50",
        "expected": "-1",
        "explanation": "All marks equal average, none strictly greater, so -1."
      },
      {
        "id": 3,
        "input": "2\n30 70",
        "expected": "70",
        "explanation": "Average is 50.0, 70 is greater."
      }
    ]
  },
  "q20_stream_api_distinct_top_three_distances": {
    "num": "20",
    "id": "q20_stream_api_distinct_top_three_distances",
    "title": "Delivery Vehicle Distances Distinct Top Three",
    "tag": "Stream API & Sorting",
    "category": "Java Stream API",
    "subtitle": "Stream API distinct(), sorted(), and limit()",
    "brief": "A delivery company records the distances travelled by its vehicles. Some distances may be repeated because multiple vehicles travel the same distance.\n\nUsing the Stream API, remove duplicate distances, sort the remaining distances in descending order, and display the top three distinct distances. If fewer than three distinct distances exist, display all available distinct distances.\n\nConstraints:\n1 <= N <= 1000\n1 <= Distance <= 100000",
    "inputFormat": "The first line contains N.\nThe second line contains N space-separated distances.",
    "outputFormat": "Print the top three distinct distances in descending order.",
    "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read N and distances into a List<Integer>\n        \n        // Use Stream API distinct(), sorted(Comparator.reverseOrder()), and limit(3)\n        \n    }\n}",
    "solutionCode": "import java.util.*;\nimport java.util.stream.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        List<Integer> distances = new ArrayList<>();\n        for (int i = 0; i < n; i++) distances.add(sc.nextInt());\n\n        List<Integer> topDistances = distances.stream()\n            .distinct()\n            .sorted(Comparator.reverseOrder())\n            .limit(3)\n            .collect(Collectors.toList());\n\n        System.out.println(topDistances.stream().map(String::valueOf).collect(Collectors.joining(\" \")));\n    }\n}",
    "hints": [
      {
        "title": "Stream Pipeline",
        "text": "Chain <code>.distinct().sorted(Comparator.reverseOrder()).limit(3)</code>."
      },
      {
        "title": "Dynamic Size",
        "text": "<code>limit(3)</code> gracefully returns fewer elements if the stream has fewer than 3 distinct items."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "8\n120 450 300 450 700 120 550 700",
        "expected": "700 550 450",
        "explanation": "Distinct distances: 120, 450, 300, 700, 550. Sorted descending: 700, 550, 450, 300, 120. Top 3 are 700 550 450."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "2\n100 200",
        "expected": "200 100",
        "explanation": "Only 2 distinct distances exist."
      },
      {
        "id": 3,
        "input": "4\n50 50 50 50",
        "expected": "50",
        "explanation": "Only 1 distinct distance exists."
      }
    ]
  },
  "q21_stream_api_salary_reduction": {
    "num": "21",
    "id": "q21_stream_api_salary_reduction",
    "title": "Payroll High Salary Filter and Reduction",
    "tag": "Stream API & Reduction",
    "category": "Java Stream API",
    "subtitle": "Stream API filter() and reduce() / sum()",
    "brief": "A company's payroll system stores the salaries of its employees. The management wants to calculate the total salary of employees whose salary is greater than a specified threshold.\n\nUsing the Stream API, filter the qualifying salaries and use a reduction operation to calculate their total.\n\nConstraints:\n1 <= N <= 1000\n10000 <= Salary <= 1000000\n10000 <= Threshold <= 1000000",
    "inputFormat": "The first line contains N.\nThe second line contains N salary values.\nThe third line contains the salary threshold.",
    "outputFormat": "Print the total salary of all employees whose salary is strictly greater than the threshold.",
    "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read N, salaries into List<Long>, and threshold\n        \n        // Use Stream API filter and reduce to calculate total\n        \n    }\n}",
    "solutionCode": "import java.util.*;\nimport java.util.stream.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        List<Long> salaries = new ArrayList<>();\n        for (int i = 0; i < n; i++) salaries.add(sc.nextLong());\n        long threshold = sc.nextLong();\n\n        long total = salaries.stream()\n            .filter(s -> s > threshold)\n            .reduce(0L, Long::sum);\n\n        System.out.println(total);\n    }\n}",
    "hints": [
      {
        "title": "Filter Condition",
        "text": "Filter using <code>.filter(s -> s > threshold)</code>."
      },
      {
        "title": "Stream Reduction",
        "text": "Use <code>.reduce(0L, Long::sum)</code> to aggregate matching values."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "6\n35000 52000 48000 75000 42000 90000\n50000",
        "expected": "217000",
        "explanation": "Salaries > 50000 are 52000, 75000, 90000. Total = 217000."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "3\n20000 30000 40000\n50000",
        "expected": "0",
        "explanation": "No salaries exceed 50000, sum is 0."
      },
      {
        "id": 3,
        "input": "2\n60000 70000\n60000",
        "expected": "70000",
        "explanation": "Strictly greater than 60000 leaves only 70000."
      }
    ]
  },
  "q22_stream_api_price_discount_mapping": {
    "num": "22",
    "id": "q22_stream_api_price_discount_mapping",
    "title": "Online Store Price Transformation Mapping",
    "tag": "Stream API & Mapping",
    "category": "Java Stream API",
    "subtitle": "Stream API map() with Conditional Discounts",
    "brief": "An online store maintains product prices. The store wants to apply a category-based transformation to its prices using the Stream API.\n\nFor every price:\n• If the price is at least 1000, apply a 15% discount.\n• Otherwise, apply a 5% discount.\n\nUse Stream API mapping operations to generate the final prices and display them rounded to the nearest integer.\n\nConstraints:\n1 <= N <= 100\n100 <= Price <= 100000",
    "inputFormat": "The first line contains N.\nThe second line contains N integer prices.",
    "outputFormat": "Print the updated prices separated by a single space.",
    "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read N and prices into List<Integer>\n        \n        // Use Stream API map with Math.round() for 15% (>= 1000) or 5% (< 1000) discount\n        \n    }\n}",
    "solutionCode": "import java.util.*;\nimport java.util.stream.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        List<Integer> prices = new ArrayList<>();\n        for (int i = 0; i < n; i++) prices.add(sc.nextInt());\n\n        List<Long> updated = prices.stream()\n            .map(p -> {\n                double discounted = (p >= 1000) ? p * 0.85 : p * 0.95;\n                return Math.round(discounted);\n            })\n            .collect(Collectors.toList());\n\n        System.out.println(updated.stream().map(String::valueOf).collect(Collectors.joining(\" \")));\n    }\n}",
    "hints": [
      {
        "title": "Mapping Logic",
        "text": "Inside <code>.map()</code>, apply <code>p >= 1000 ? p * 0.85 : p * 0.95</code>."
      },
      {
        "title": "Rounding",
        "text": "Use <code>Math.round()</code> to round the double calculation to the nearest integer."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "6\n500 1200 800 2000 1500 900",
        "expected": "475 1020 760 1700 1275 855",
        "explanation": "500*0.95=475, 1200*0.85=1020, 800*0.95=760, 2000*0.85=1700, 1500*0.85=1275, 900*0.95=855."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "2\n1000 999",
        "expected": "850 949",
        "explanation": "1000 gets 15% discount (850), 999 gets 5% discount (rounded to 949)."
      },
      {
        "id": 3,
        "input": "1\n100",
        "expected": "95",
        "explanation": "100 * 0.95 = 95."
      }
    ]
  },
  "q23_stream_api_grouping_by_marks": {
    "num": "23",
    "id": "q23_stream_api_grouping_by_marks",
    "title": "University Marks Grouping Summary",
    "tag": "Collectors.groupingBy()",
    "category": "Java Stream API",
    "subtitle": "Stream API Classification & Counting",
    "brief": "A university maintains student marks and wants to prepare a summary using the Stream API. Each mark must be classified into one of three categories:\n• High -> marks >= 75\n• Medium -> marks between 50 and 74\n• Low -> marks below 50\n\nUse Collectors.groupingBy() to group the marks according to these categories and display the number of students in each category.\n\nConstraints:\n1 <= N <= 1000\n0 <= Marks <= 100",
    "inputFormat": "The first line contains N.\nThe second line contains N space-separated marks.",
    "outputFormat": "Print:\nHigh: count\nMedium: count\nLow: count\non separate lines.",
    "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read N and marks into List<Integer>\n        \n        // Use Collectors.groupingBy() to count High, Medium, Low categories\n        \n    }\n}",
    "solutionCode": "import java.util.*;\nimport java.util.stream.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        List<Integer> marks = new ArrayList<>();\n        for (int i = 0; i < n; i++) marks.add(sc.nextInt());\n\n        Map<String, Long> counts = marks.stream().collect(\n            Collectors.groupingBy(\n                m -> m >= 75 ? \"High\" : (m >= 50 ? \"Medium\" : \"Low\"),\n                Collectors.counting()\n            )\n        );\n\n        System.out.println(\"High: \" + counts.getOrDefault(\"High\", 0L));\n        System.out.println(\"Medium: \" + counts.getOrDefault(\"Medium\", 0L));\n        System.out.println(\"Low: \" + counts.getOrDefault(\"Low\", 0L));\n    }\n}",
    "hints": [
      {
        "title": "Classification Function",
        "text": "Map marks to <code>\"High\"</code>, <code>\"Medium\"</code>, or <code>\"Low\"</code> based on threshold rules."
      },
      {
        "title": "Collectors.counting()",
        "text": "Pass <code>Collectors.counting()</code> as downstream collector to <code>Collectors.groupingBy()</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "8\n82 45 67 91 38 75 54 49",
        "expected": "High: 3\nMedium: 2\nLow: 3",
        "explanation": "High (>=75): 82, 91, 75 (3). Medium (50-74): 67, 54 (2). Low (<50): 45, 38, 49 (3)."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "3\n80 90 100",
        "expected": "High: 3\nMedium: 0\nLow: 0",
        "explanation": "All students have high marks."
      },
      {
        "id": 3,
        "input": "2\n50 74",
        "expected": "High: 0\nMedium: 2\nLow: 0",
        "explanation": "Both students in medium range."
      }
    ]
  },
  "q24_stream_api_sum_of_squares_even": {
    "num": "24",
    "id": "q24_stream_api_sum_of_squares_even",
    "title": "Data Analytics Sum of Squares of Even Numbers",
    "tag": "Stream API & Filter-Map-Reduce",
    "category": "Java Stream API",
    "subtitle": "Stream filter(), map(), and reduce() Pipeline",
    "brief": "A data analytics system receives N integer values. The system needs to calculate the sum of the squares of only the even values.\n\nUsing the Stream API, filter the even numbers, transform each value into its square, and use a reduction operation to calculate the final sum.\n\nConstraints:\n1 <= N <= 100\n-1000 <= Value <= 1000",
    "inputFormat": "The first line contains N.\nThe second line contains N integers.",
    "outputFormat": "Print the sum of squares of all even values.",
    "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read N and integers into List<Integer>\n        \n        // Use Stream API to filter even, square them, and reduce sum\n        \n    }\n}",
    "solutionCode": "import java.util.*;\nimport java.util.stream.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        List<Integer> list = new ArrayList<>();\n        for (int i = 0; i < n; i++) list.add(sc.nextInt());\n\n        long sum = list.stream()\n            .filter(x -> x % 2 == 0)\n            .mapToLong(x -> (long) x * x)\n            .reduce(0L, Long::sum);\n\n        System.out.println(sum);\n    }\n}",
    "hints": [
      {
        "title": "Even Filter",
        "text": "Filter even numbers with <code>.filter(x -> x % 2 == 0)</code>."
      },
      {
        "title": "Square & Sum",
        "text": "Transform with <code>.mapToLong(x -> (long) x * x)</code> and reduce with <code>.reduce(0L, Long::sum)</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "6\n3 4 6 5 8 7",
        "expected": "116",
        "explanation": "Even values: 4, 6, 8. Squares: 16, 36, 64. Sum = 16 + 36 + 64 = 116."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "3\n1 3 5",
        "expected": "0",
        "explanation": "No even numbers, sum of squares is 0."
      },
      {
        "id": 3,
        "input": "2\n-2 4",
        "expected": "20",
        "explanation": "(-2)^2 + 4^2 = 4 + 16 = 20."
      }
    ]
  },
  "q25_exception_hierarchy_handling": {
    "num": "25",
    "id": "q25_exception_hierarchy_handling",
    "title": "Data Processing Array Index & Arithmetic Exceptions",
    "tag": "Multiple Catch Blocks",
    "category": "Exception Handling",
    "subtitle": "ArrayIndexOutOfBoundsException & ArithmeticException",
    "brief": "A data processing system receives two integers and uses the first integer as an array index and the second integer as a divisor.\n\nWrite a Java program using exception handling to manage both an invalid array index and division by zero. Use appropriate exception classes from Java's exception hierarchy and handle each situation separately.\n\nIf the index is invalid, print:\nInvalid Index\n\nIf the divisor is zero, print:\nDivision By Zero\n\nOtherwise, print the value at the specified index divided by the divisor.\n\nConstraints:\n1 <= N <= 100\n-1000 <= Array Element <= 1000\n-100 <= Index <= 100\n-100 <= Divisor <= 100",
    "inputFormat": "The first line contains N.\nThe second line contains N integers.\nThe third line contains the index.\nThe fourth line contains the divisor.",
    "outputFormat": "Print the calculated result or the appropriate exception message.",
    "starterCode": "import java.util.Scanner;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read array elements, index, and divisor\n        \n        // Use try-catch blocks for ArrayIndexOutOfBoundsException and ArithmeticException\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();\n        int index = sc.nextInt();\n        int divisor = sc.nextInt();\n\n        try {\n            if (index < 0 || index >= n) {\n                throw new ArrayIndexOutOfBoundsException();\n            }\n            if (divisor == 0) {\n                throw new ArithmeticException();\n            }\n            int result = arr[index] / divisor;\n            System.out.println(result);\n        } catch (ArrayIndexOutOfBoundsException e) {\n            System.out.println(\"Invalid Index\");\n        } catch (ArithmeticException e) {\n            System.out.println(\"Division By Zero\");\n        }\n    }\n}",
    "hints": [
      {
        "title": "Check Order",
        "text": "Validate the index first before attempting array access and division."
      },
      {
        "title": "Catch Specific Exceptions",
        "text": "Provide separate catch blocks for <code>ArrayIndexOutOfBoundsException</code> and <code>ArithmeticException</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "5\n20 40 60 80 100\n2\n10",
        "expected": "6",
        "explanation": "Index 2 is 60. 60 / 10 = 6."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "3\n10 20 30\n5\n2",
        "expected": "Invalid Index",
        "explanation": "Index 5 is out of bounds for array of size 3."
      },
      {
        "id": 3,
        "input": "3\n10 20 30\n1\n0",
        "expected": "Division By Zero",
        "explanation": "Divisor is 0, causing division by zero."
      }
    ]
  },
  "q26_database_normalization_first_normal_form": {
    "num": "26",
    "id": "q26_database_normalization_first_normal_form",
    "title": "Library Record First Normal Form (1NF) Normalization",
    "tag": "Database Normalization (1NF)",
    "category": "Database Normalization",
    "subtitle": "Splitting Multi-Valued Attributes into Atomic Records",
    "brief": "A library management system stores information about the books borrowed by each member. Currently, all borrowed book names are stored together in a single field, separated by commas.\nFor example:\n201 Java,Python,DBMS\n\nThis creates multiple values in one field and therefore violates the requirements of First Normal Form (1NF).\n\nTo normalize the data, develop a Java program that converts each member's record into 1NF format, where each record contains exactly one member and one borrowed book.\n\nThe program should:\n• Separate the comma-separated book list into individual book names.\n• Generate a separate record for every book borrowed by a member.\n• Preserve the original order of members.\n• Preserve the original order of books for each member.\n\nConstraints:\n1 <= N <= 50\n1 <= number of books per member <= 5\nMember ID is a positive integer.\nBook names contain only alphabets.\nThere are no spaces around commas.",
    "inputFormat": "The first line contains an integer N, representing the number of member records.\nEach of the next N lines contains:\nMember ID\nComma-separated list of borrowed books.",
    "outputFormat": "Print each book as an individual record in the following format:\nMemberID Book\nMaintain the same order as provided in the input.",
    "starterCode": "import java.util.Scanner;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read N member records and split books to convert to 1NF\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n\n        for (int i = 0; i < n; i++) {\n            String memberId = sc.next();\n            String booksStr = sc.next();\n            String[] books = booksStr.split(\",\");\n            for (String book : books) {\n                System.out.println(memberId + \" \" + book);\n            }\n        }\n    }\n}",
    "hints": [
      {
        "title": "1NF Rule",
        "text": "First Normal Form requires all attribute values to be atomic (single-valued)."
      },
      {
        "title": "String Split",
        "text": "Use <code>booksStr.split(\",\")</code> to separate individual books and print with <code>memberId</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "3\n201 Java,Python,DBMS\n202 HTML,CSS\n203 JavaScript,React",
        "expected": "201 Java\n201 Python\n201 DBMS\n202 HTML\n202 CSS\n203 JavaScript\n203 React",
        "explanation": "Every comma-separated book is decomposed into an individual atomic record."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "1\n101 Java",
        "expected": "101 Java",
        "explanation": "Single book is already atomic in 1NF."
      },
      {
        "id": 3,
        "input": "2\n301 C,CPP\n302 Rust",
        "expected": "301 C\n301 CPP\n302 Rust",
        "explanation": "Multiple records decomposed preservation order."
      }
    ]
  },
  "q27_database_normalization_second_normal_form": {
    "num": "27",
    "id": "q27_database_normalization_second_normal_form",
    "title": "Hospital Summary Second Normal Form (2NF) Restructuring",
    "tag": "Database Normalization (2NF)",
    "category": "Database Normalization",
    "subtitle": "Patient-Level Summary & Partial Dependency Removal",
    "brief": "A hospital management system maintains patient treatment information in a single table containing both patient details and treatment-specific information:\nPatientID PatientName TreatmentID TreatmentName DoctorName\n\nSince a patient may receive multiple treatments, the patient's ID and name are repeated for every treatment record. This causes unnecessary duplication of patient information.\n\nTo restructure the data according to the principles of Second Normal Form (2NF), the hospital wants to create a patient-level summary in which each patient appears only once.\n\nDevelop a Java program using arrays and loops to process the given treatment records and:\n• Identify each unique patient using the Patient ID.\n• Store the patient's name only once in the summary.\n• Count the total number of different treatment records associated with each patient.\n• Preserve the order in which patients first appear in the input.\n• Display the patient ID, patient name, and total treatment count.\n\nConstraints:\n1 <= N <= 50\nPatient ID and Treatment ID are positive integers.\nPatient and doctor names contain no spaces.\nThe same patient-treatment combination does not occur more than once.",
    "inputFormat": "The first line contains an integer N, representing the number of treatment records.\nEach of the next N lines contains:\nPatient ID\nPatient Name\nTreatment ID\nTreatment Name\nDoctor Name",
    "outputFormat": "For each unique patient, print:\nPatientID PatientName TreatmentCount\nMaintain the order of the patient's first appearance in the input.",
    "starterCode": "import java.util.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read N treatment records and create 2NF patient summary\n        \n    }\n}",
    "solutionCode": "import java.util.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n\n        List<Integer> order = new ArrayList<>();\n        Map<Integer, String> names = new HashMap<>();\n        Map<Integer, Integer> counts = new HashMap<>();\n\n        for (int i = 0; i < n; i++) {\n            int pid = sc.nextInt();\n            String name = sc.next();\n            int tid = sc.nextInt();\n            String tname = sc.next();\n            String dname = sc.next();\n\n            if (!counts.containsKey(pid)) {\n                order.add(pid);\n                names.put(pid, name);\n                counts.put(pid, 1);\n            } else {\n                counts.put(pid, counts.get(pid) + 1);\n            }\n        }\n\n        for (int pid : order) {\n            System.out.println(pid + \" \" + names.get(pid) + \" \" + counts.get(pid));\n        }\n    }\n}",
    "hints": [
      {
        "title": "2NF Principle",
        "text": "2NF eliminates partial dependencies by separating entity-level attributes (patient name) from multi-treatment transactions."
      },
      {
        "title": "Order Preservation",
        "text": "Maintain a list of unique patient IDs in order of first appearance."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "6\n501 Rahul 301 Checkup DrKumar\n502 Neha 302 XRay DrSharma\n501 Rahul 303 BloodTest DrMehta\n503 Aman 301 Checkup DrKumar\n502 Neha 304 MRI DrSingh\n501 Rahul 305 ECG DrPatel",
        "expected": "501 Rahul 3\n502 Neha 2\n503 Aman 1",
        "explanation": "501 has 3 treatments, 502 has 2 treatments, 503 has 1 treatment in order of appearance."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "2\n101 John 1 Consultation DrA\n101 John 2 Followup DrB",
        "expected": "101 John 2",
        "explanation": "Single patient with 2 visits."
      },
      {
        "id": 3,
        "input": "1\n201 Alice 5 Scan DrC",
        "expected": "201 Alice 1",
        "explanation": "Single patient with 1 visit."
      }
    ]
  },
  "q28_database_normalization_third_normal_form": {
    "num": "28",
    "id": "q28_database_normalization_third_normal_form",
    "title": "Student Enrollment Third Normal Form (3NF) Deduplication",
    "tag": "Database Normalization (3NF)",
    "category": "Database Normalization",
    "subtitle": "Transitive Dependency Handling & Student Summary",
    "brief": "A college administration system maintains student enrollment records containing student and department information in the following structure:\nStudentID StudentName DepartmentID DepartmentName\n\nDuring database analysis, it is observed that the DepartmentName is determined by the DepartmentID, rather than directly by the StudentID. Therefore, the dependencies can be represented as:\nStudentID -> StudentName, DepartmentID\nDepartmentID -> DepartmentName\n\nThis creates a transitive dependency, which is addressed by Third Normal Form (3NF).\n\nFor this programming task, the college wants to generate a simplified student summary in which duplicate student records are removed.\n\nDevelop a Java program using arrays and loops only to:\n• Identify whether a student has already been processed using the StudentID.\n• Store each unique student only once.\n• Associate the student with the corresponding department name.\n• Preserve the order in which unique students first appear in the input.\n• Ignore duplicate records for an already processed student.\n\nConstraints:\n1 <= N <= 50\nStudent IDs and Department IDs are positive integers.\nStudent names and department names contain no spaces.\nThe same student may occur more than once.\nRepeated records for the same student contain the same department information.",
    "inputFormat": "The first line contains an integer N, representing the number of enrollment records.\nEach of the next N lines contains:\nStudent ID\nStudent Name\nDepartment ID\nDepartment Name",
    "outputFormat": "For every unique student, print:\nStudentID StudentName DepartmentName\nMaintain the order in which the students first appear in the input.",
    "starterCode": "import java.util.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read N enrollment records and filter duplicate student entries\n        \n    }\n}",
    "solutionCode": "import java.util.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n\n        List<String> results = new ArrayList<>();\n        Set<Integer> seen = new HashSet<>();\n\n        for (int i = 0; i < n; i++) {\n            int sid = sc.nextInt();\n            String sname = sc.next();\n            int did = sc.nextInt();\n            String dname = sc.next();\n\n            if (!seen.contains(sid)) {\n                seen.add(sid);\n                results.add(sid + \" \" + sname + \" \" + dname);\n            }\n        }\n\n        for (String record : results) {\n            System.out.println(record);\n        }\n    }\n}",
    "hints": [
      {
        "title": "3NF Analysis",
        "text": "Transitive dependency: StudentID -> DepartmentID -> DepartmentName. Separating student and department avoids update anomalies."
      },
      {
        "title": "Deduplication",
        "text": "Track processed <code>StudentID</code> in a set or array and only store records on first occurrence."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "6\n201 Arjun 10 ComputerScience\n202 Priya 20 Commerce\n203 Karan 10 ComputerScience\n201 Arjun 10 ComputerScience\n204 Sneha 30 Mathematics\n202 Priya 20 Commerce",
        "expected": "201 Arjun ComputerScience\n202 Priya Commerce\n203 Karan ComputerScience\n204 Sneha Mathematics",
        "explanation": "Duplicate records for 201 Arjun and 202 Priya are ignored."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "2\n101 John 1 Physics\n101 John 1 Physics",
        "expected": "101 John Physics",
        "explanation": "Identical records deduplicated."
      },
      {
        "id": 3,
        "input": "1\n501 Emma 5 Arts",
        "expected": "501 Emma Arts",
        "explanation": "Single record displayed unchanged."
      }
    ]
  },
  "q29_functional_dependencies_faculty_allocation": {
    "num": "29",
    "id": "q29_functional_dependencies_faculty_allocation",
    "title": "University Classroom Faculty Allocation Deduplication",
    "tag": "Functional Dependencies",
    "category": "Database Normalization",
    "subtitle": "Unique Faculty Allocation Summary by FacultyID",
    "brief": "A university classroom management system stores course allocation information in the following structure:\nCourseID FacultyID FacultyName RoomNo\n\nA faculty member can teach multiple courses, and a room can be used for multiple courses. The university has the following functional dependencies:\nCourseID -> FacultyID\nFacultyID -> FacultyName\nRoomNo -> FacultyID\n\nThe system wants to create a simplified faculty allocation summary by keeping only the first occurrence of each FacultyID.\n\nDevelop a pure Java program using arrays and loops only to:\n• Read the given allocation records.\n• Identify whether a faculty member has already been processed using FacultyID.\n• Store each unique faculty member only once.\n• Store the corresponding FacultyName and RoomNo.\n• Ignore duplicate records for the same faculty.\n• Preserve the order in which faculty members first appear.\n• Display the unique faculty allocation records.\n\nConstraints:\n1 <= N <= 50\nCourse ID, Faculty ID, and Room Number are positive integers.\nFaculty names contain no spaces.\nThe same faculty may occur in multiple records.\nDuplicate faculty records contain the same faculty name.",
    "inputFormat": "The first line contains an integer N, representing the number of records.\nEach of the next N lines contains:\nCourseID FacultyID FacultyName RoomNo",
    "outputFormat": "For every unique faculty member, print:\nFacultyID FacultyName RoomNo\nMaintain the order of first appearance.",
    "starterCode": "import java.util.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read N records and retain only first occurrence of each FacultyID\n        \n    }\n}",
    "solutionCode": "import java.util.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n\n        List<String> records = new ArrayList<>();\n        Set<Integer> seenFaculty = new HashSet<>();\n\n        for (int i = 0; i < n; i++) {\n            int cid = sc.nextInt();\n            int fid = sc.nextInt();\n            String fname = sc.next();\n            int room = sc.nextInt();\n\n            if (!seenFaculty.contains(fid)) {\n                seenFaculty.add(fid);\n                records.add(fid + \" \" + fname + \" \" + room);\n            }\n        }\n\n        for (String r : records) {\n            System.out.println(r);\n        }\n    }\n}",
    "hints": [
      {
        "title": "First Occurrence",
        "text": "Maintain a collection or array of processed FacultyIDs; output only when an ID is seen for the first time."
      },
      {
        "title": "Fields to Print",
        "text": "Print <code>FacultyID FacultyName RoomNo</code> without the CourseID."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "7\n101 501 Sharma 201\n102 502 Mehta 202\n103 501 Sharma 201\n104 503 Gupta 203\n105 502 Mehta 202\n106 504 Singh 204\n107 501 Sharma 201",
        "expected": "501 Sharma 201\n502 Mehta 202\n503 Gupta 203\n504 Singh 204",
        "explanation": "Records for 501, 502, 503, 504 are retained once in order of first encounter."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "3\n1 10 Alpha 101\n2 10 Alpha 101\n3 10 Alpha 101",
        "expected": "10 Alpha 101",
        "explanation": "All 3 entries belong to faculty 10."
      },
      {
        "id": 3,
        "input": "2\n1 20 Beta 201\n2 30 Gamma 301",
        "expected": "20 Beta 201\n30 Gamma 301",
        "explanation": "Two distinct faculty members."
      }
    ]
  },
  "q30_hotel_reservation_localdate": {
    "num": "30",
    "id": "q30_hotel_reservation_localdate",
    "title": "Hotel Reservation Status with LocalDate",
    "tag": "Java Date-Time (LocalDate)",
    "category": "Java Date-Time API",
    "subtitle": "LocalDate Addition, Subtraction & Field Extraction",
    "brief": "A hotel reservation system records the date on which a guest checks in and the number of nights included in the reservation. The system also records how many nights the guest has already stayed.\n\nDevelop a Java program using the Java Date-Time API to process the reservation details and determine the reservation status.\n\nThe program must:\n• Calculate the checkout date by adding the complete reservation period to the check-in date.\n• Determine the number of nights remaining by subtracting the nights already stayed from the total number of reserved nights.\n• Extract and display the year and month from the calculated checkout date.\n• Use the LocalDate class for all date calculations.\n\nConstraints:\nThe check-in date is valid.\n1 <= totalNights <= 365\n0 <= stayedNights < totalNights\nYear is between 2020 and 2030.",
    "inputFormat": "The input consists of three lines:\nThe first line contains the check-in date in the format yyyy-MM-dd.\nThe second line contains the total number of nights reserved.\nThe third line contains the number of nights already stayed.",
    "outputFormat": "Print the following information on separate lines in the specified order:\nCheckout date\nRemaining nights\nYear of the checkout date\nMonth of the checkout date",
    "starterCode": "import java.util.Scanner;\nimport java.time.LocalDate;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read check-in date, total nights, and stayed nights\n        \n        // Use LocalDate.parse(), plusDays(), getYear(), and getMonthValue()\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\nimport java.time.LocalDate;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String dateStr = sc.nextLine().trim();\n        int totalNights = Integer.parseInt(sc.nextLine().trim());\n        int stayedNights = Integer.parseInt(sc.nextLine().trim());\n\n        LocalDate checkIn = LocalDate.parse(dateStr);\n        LocalDate checkOut = checkIn.plusDays(totalNights);\n        int remainingNights = totalNights - stayedNights;\n\n        System.out.println(checkOut);\n        System.out.println(remainingNights);\n        System.out.println(checkOut.getYear());\n        System.out.println(checkOut.getMonthValue());\n    }\n}",
    "hints": [
      {
        "title": "LocalDate Operations",
        "text": "Parse with <code>LocalDate.parse(dateStr)</code> and add days with <code>checkIn.plusDays(totalNights)</code>."
      },
      {
        "title": "Month Extraction",
        "text": "Use <code>checkOut.getMonthValue()</code> to retrieve the numeric month representation (1-12)."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "2026-08-10\n30\n12",
        "expected": "2026-09-09\n18\n2026\n9",
        "explanation": "2026-08-10 + 30 days = 2026-09-09. Remaining: 30 - 12 = 18. Year: 2026, Month: 9."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "2025-01-01\n10\n0",
        "expected": "2025-01-11\n10\n2025\n1",
        "explanation": "0 stayed nights means 10 remain."
      },
      {
        "id": 3,
        "input": "2024-12-25\n10\n5",
        "expected": "2025-01-04\n5\n2025\n1",
        "explanation": "Year rollover handled automatically by LocalDate."
      }
    ]
  },
  "q31_college_exam_localdatetime": {
    "num": "31",
    "id": "q31_college_exam_localdatetime",
    "title": "College Examination End Time with LocalDateTime",
    "tag": "Java Date-Time (LocalDateTime)",
    "category": "Java Date-Time API",
    "subtitle": "Combining Date & Time with plusMinutes()",
    "brief": "A college examination system records the date and starting time of an examination. The examination lasts for a specified number of minutes.\n\nDevelop a Java program using the Java Date-Time API to determine the examination's ending date and time.\n\nThe program must:\n• Read the examination date using LocalDate.\n• Read the examination start time using LocalTime.\n• Combine the date and time using LocalDateTime.\n• Add the given examination duration in minutes.\n• Display the resulting ending date and time.\n• Display the year, month, and hour of the examination end time.\n• Use LocalDate, LocalTime, and LocalDateTime for the required operations.\n\nConstraints:\nThe examination date is valid.\nTime is provided in 24-hour format.\n30 <= duration <= 300\nYear is between 2020 and 2030.",
    "inputFormat": "The first line contains the examination date in the format yyyy-MM-dd.\nThe second line contains the examination start time in the format HH:mm.\nThe third line contains the examination duration in minutes.",
    "outputFormat": "Print the following on separate lines:\nExamination end date\nExamination end time\nYear of the end date\nMonth of the end date\nHour of the end time",
    "starterCode": "import java.util.Scanner;\nimport java.time.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read date, time, and duration\n        \n        // Combine into LocalDateTime and add minutes\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\nimport java.time.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String dateStr = sc.nextLine().trim();\n        String timeStr = sc.nextLine().trim();\n        int duration = Integer.parseInt(sc.nextLine().trim());\n\n        LocalDate date = LocalDate.parse(dateStr);\n        LocalTime time = LocalTime.parse(timeStr);\n        LocalDateTime startDateTime = LocalDateTime.of(date, time);\n        LocalDateTime endDateTime = startDateTime.plusMinutes(duration);\n\n        System.out.println(endDateTime.toLocalDate());\n        System.out.println(endDateTime.toLocalTime());\n        System.out.println(endDateTime.getYear());\n        System.out.println(endDateTime.getMonthValue());\n        System.out.println(endDateTime.getHour());\n    }\n}",
    "hints": [
      {
        "title": "Combine Date & Time",
        "text": "Use <code>LocalDateTime.of(date, time)</code> to merge date and time components."
      },
      {
        "title": "Duration Addition",
        "text": "Call <code>startDateTime.plusMinutes(duration)</code> and extract parts via <code>.toLocalDate()</code>, <code>.toLocalTime()</code>, etc."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "2026-09-14\n22:30\n120",
        "expected": "2026-09-15\n00:30\n2026\n9\n0",
        "explanation": "22:30 + 120 mins rolls over past midnight to 2026-09-15 00:30. Hour is 0."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "2026-05-10\n09:00\n60",
        "expected": "2026-05-10\n10:00\n2026\n5\n10",
        "explanation": "09:00 + 60 mins = 10:00 on same day."
      },
      {
        "id": 3,
        "input": "2026-12-31\n23:00\n90",
        "expected": "2027-01-01\n00:30\n2027\n1\n0",
        "explanation": "New year rollover."
      }
    ]
  },
  "q32_electricity_consumption_functional": {
    "num": "32",
    "id": "q32_electricity_consumption_functional",
    "title": "Smart Electricity Consumption Functional Adjustment",
    "tag": "Functional Streams & Mapping",
    "category": "Functional Programming & Lambdas",
    "subtitle": "Functional List Transformation & Precision Formatting",
    "brief": "A smart electricity monitoring system receives the power consumption of several devices. The system needs to process the readings using a functional programming approach.\n\nFor every reading, calculate the adjusted consumption using:\nAdjusted Consumption = Reading × 1.10\n\nWrite a Java program that stores the readings in a list and uses a functional approach to process each reading and display the adjusted consumption rounded to two decimal places.\n\nConstraints:\n1 <= N <= 100\n0 <= Reading <= 10000",
    "inputFormat": "The first line contains the number of devices.\nThe second line contains the power consumption readings separated by spaces.",
    "outputFormat": "Print the adjusted consumption of each device separated by a space, with each value displayed up to two decimal places.",
    "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read device count and readings\n        \n        // Use a functional stream mapping approach to calculate adjusted consumption\n        \n    }\n}",
    "solutionCode": "import java.util.*;\nimport java.util.stream.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        List<Double> readings = new ArrayList<>();\n        for (int i = 0; i < n; i++) readings.add(sc.nextDouble());\n\n        String result = readings.stream()\n            .map(r -> String.format(Locale.US, \"%.2f\", r * 1.10))\n            .collect(Collectors.joining(\" \"));\n\n        System.out.println(result);\n    }\n}",
    "hints": [
      {
        "title": "Functional Map",
        "text": "Use <code>readings.stream().map(r -> String.format(Locale.US, \"%.2f\", r * 1.10))</code>."
      },
      {
        "title": "Output Joining",
        "text": "Collect formatted strings with <code>Collectors.joining(\" \")</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "4\n100 200 300 400",
        "expected": "110.00 220.00 330.00 440.00",
        "explanation": "100*1.1=110.00, 200*1.1=220.00, 300*1.1=330.00, 400*1.1=440.00."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "1\n0",
        "expected": "0.00",
        "explanation": "0 * 1.10 = 0.00."
      },
      {
        "id": 3,
        "input": "2\n50 75",
        "expected": "55.00 82.50",
        "explanation": "50*1.1 = 55.00, 75*1.1 = 82.50."
      }
    ]
  },
  "q33_package_priority_lambda_expression": {
    "num": "33",
    "id": "q33_package_priority_lambda_expression",
    "title": "Delivery Package Priority Calculation with Lambda",
    "tag": "Lambda Expressions",
    "category": "Functional Programming & Lambdas",
    "subtitle": "Custom Functional Interface & Lambda Formula",
    "brief": "A delivery company assigns a priority score to packages based on their weight. A package receives a priority score equal to its weight multiplied by 2 and increased by 10.\n\nWrite a Java program using a Lambda Expression to calculate the priority score of every package.\n\nConstraints:\n1 <= N <= 100\n1 <= Weight <= 1000",
    "inputFormat": "The first line contains the number of packages.\nThe second line contains the package weights separated by spaces.",
    "outputFormat": "Print the priority score of each package separated by spaces.",
    "starterCode": "import java.util.*;\n\n@FunctionalInterface\ninterface PriorityCalculator {\n    int calculate(int weight);\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Define lambda expression: weight -> weight * 2 + 10\n        \n        // Calculate and print priority scores\n        \n    }\n}",
    "solutionCode": "import java.util.*;\n\n@FunctionalInterface\ninterface PriorityCalculator {\n    int calculate(int weight);\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n\n        PriorityCalculator calc = w -> w * 2 + 10;\n        StringBuilder sb = new StringBuilder();\n\n        for (int i = 0; i < n; i++) {\n            int w = sc.nextInt();\n            if (i > 0) sb.append(\" \");\n            sb.append(calc.calculate(w));\n        }\n\n        System.out.println(sb.toString());\n    }\n}",
    "hints": [
      {
        "title": "Lambda Definition",
        "text": "Define a functional interface with a single abstract method and instantiate it with <code>w -> w * 2 + 10</code>."
      },
      {
        "title": "Evaluation",
        "text": "Call <code>calc.calculate(w)</code> for each input weight."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "3\n10 25 40",
        "expected": "30 60 90",
        "explanation": "10*2+10=30, 25*2+10=60, 40*2+10=90."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "1\n1",
        "expected": "12",
        "explanation": "1*2+10 = 12."
      },
      {
        "id": 3,
        "input": "2\n100 500",
        "expected": "210 1010",
        "explanation": "100*2+10=210, 500*2+10=1010."
      }
    ]
  },
  "q34_machine_temperature_predicate": {
    "num": "34",
    "id": "q34_machine_temperature_predicate",
    "title": "Machine Temperature Quality Check with Functional Interface",
    "tag": "Functional Interface & Predicate",
    "category": "Functional Programming & Lambdas",
    "subtitle": "Predicate Range Validation [20, 80]",
    "brief": "A quality-control system checks the temperature of machines. A machine is considered safe when its temperature is between 20 and 80 degrees Celsius, inclusive.\n\nCreate a Java program using a functional interface to determine whether each machine temperature is safe or unsafe.\n\nConstraints:\n1 <= N <= 100\n-100 <= Temperature <= 200",
    "inputFormat": "The first line contains the number of machines.\nThe second line contains the temperatures separated by spaces.",
    "outputFormat": "Print Safe or Unsafe for each temperature, separated by spaces.",
    "starterCode": "import java.util.*;\nimport java.util.function.Predicate;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Define Predicate<Integer> checking 20 <= temp <= 80\n        \n        // Print Safe or Unsafe for each machine\n        \n    }\n}",
    "solutionCode": "import java.util.*;\nimport java.util.function.Predicate;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n\n        Predicate<Integer> isSafe = t -> t >= 20 && t <= 80;\n        StringBuilder sb = new StringBuilder();\n\n        for (int i = 0; i < n; i++) {\n            int temp = sc.nextInt();\n            if (i > 0) sb.append(\" \");\n            sb.append(isSafe.test(temp) ? \"Safe\" : \"Unsafe\");\n        }\n\n        System.out.println(sb.toString());\n    }\n}",
    "hints": [
      {
        "title": "Predicate<Integer>",
        "text": "Use Java's built-in <code>Predicate<Integer> isSafe = t -> t >= 20 && t <= 80;</code>."
      },
      {
        "title": "Test Method",
        "text": "Evaluate each machine using <code>isSafe.test(temp)</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "5\n25 80 90 15 50",
        "expected": "Safe Safe Unsafe Unsafe Safe",
        "explanation": "25: Safe, 80: Safe, 90: Unsafe, 15: Unsafe, 50: Safe."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "2\n20 19",
        "expected": "Safe Unsafe",
        "explanation": "Boundary 20 is Safe, 19 is Unsafe."
      },
      {
        "id": 3,
        "input": "2\n80 81",
        "expected": "Safe Unsafe",
        "explanation": "Boundary 80 is Safe, 81 is Unsafe."
      }
    ]
  },
  "q35_employee_lookup_optional": {
    "num": "35",
    "id": "q35_employee_lookup_optional",
    "title": "Employee Management Safe Search with Optional",
    "tag": "Java Optional",
    "category": "Functional Programming & Lambdas",
    "subtitle": "Null-Safe Search using Optional.ofNullable()",
    "brief": "An employee management system searches for an employee name using an employee ID. If the employee exists, the system should display the employee name. If the ID is not found, it should display Employee Not Found.\n\nWrite a Java program using Optional to safely handle the possibility of a missing employee without directly checking for a null value.\n\nConstraints:\n1 <= N <= 100\n1 <= Employee ID <= 100000",
    "inputFormat": "The first line contains the number of employees.\nThe next N lines contain employee ID and employee name.\nThe last line contains the ID to search.",
    "outputFormat": "Print the employee name if the ID exists. Otherwise, print Employee Not Found.",
    "starterCode": "import java.util.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read N employee records into a Map<Integer, String>\n        \n        // Wrap lookup in Optional and use orElse()\n        \n    }\n}",
    "solutionCode": "import java.util.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        Map<Integer, String> map = new HashMap<>();\n\n        for (int i = 0; i < n; i++) {\n            int id = sc.nextInt();\n            String name = sc.next();\n            map.put(id, name);\n        }\n\n        int searchId = sc.nextInt();\n        Optional<String> result = Optional.ofNullable(map.get(searchId));\n\n        System.out.println(result.orElse(\"Employee Not Found\"));\n    }\n}",
    "hints": [
      {
        "title": "Optional Wrapper",
        "text": "Wrap the map query with <code>Optional.ofNullable(map.get(searchId))</code>."
      },
      {
        "title": "Fallback with orElse",
        "text": "Use <code>result.orElse(\"Employee Not Found\")</code> to return the name or default text without checking <code>null</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "3\n101 Amit\n102 Neha\n103 Rahul\n102",
        "expected": "Neha",
        "explanation": "Employee 102 exists with name Neha."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "2\n101 Amit\n102 Neha\n999",
        "expected": "Employee Not Found",
        "explanation": "ID 999 does not exist."
      },
      {
        "id": 3,
        "input": "1\n501 Priya\n501",
        "expected": "Priya",
        "explanation": "Single employee match."
      }
    ]
  },
  "q36_exam_date_duration_chronounit": {
    "num": "36",
    "id": "q36_exam_date_duration_chronounit",
    "title": "University Examination Days Countdown",
    "tag": "Java Date-Time (ChronoUnit)",
    "category": "Java Date-Time API",
    "subtitle": "ChronoUnit.DAYS.between() Interval Calculation",
    "brief": "A university examination system stores the examination date and needs to determine the number of days remaining until another specified date.\n\nWrite a Java program using the Java Date-Time API to calculate the number of days between two given dates.\n\nConstraints:\nBoth dates are valid dates.\nThe ending date is not earlier than the starting date.",
    "inputFormat": "The first line contains the starting date in the format YYYY-MM-DD.\nThe second line contains the ending date in the format YYYY-MM-DD.",
    "outputFormat": "Print the number of days between the two dates.",
    "starterCode": "import java.util.Scanner;\nimport java.time.LocalDate;\nimport java.time.temporal.ChronoUnit;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read start date and end date\n        \n        // Use ChronoUnit.DAYS.between() to calculate difference\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\nimport java.time.LocalDate;\nimport java.time.temporal.ChronoUnit;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String startStr = sc.nextLine().trim();\n        String endStr = sc.nextLine().trim();\n\n        LocalDate startDate = LocalDate.parse(startStr);\n        LocalDate endDate = LocalDate.parse(endStr);\n\n        long days = ChronoUnit.DAYS.between(startDate, endDate);\n        System.out.println(days);\n    }\n}",
    "hints": [
      {
        "title": "ChronoUnit Calculation",
        "text": "Use <code>ChronoUnit.DAYS.between(startDate, endDate)</code> to get the exact days count."
      },
      {
        "title": "ISO Format",
        "text": "<code>LocalDate.parse()</code> parses standard <code>YYYY-MM-DD</code> directly."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "2026-09-01\n2026-09-15",
        "expected": "14",
        "explanation": "14 days between September 1 and September 15."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "2026-01-01\n2026-01-01",
        "expected": "0",
        "explanation": "Same day gives 0 days difference."
      },
      {
        "id": 3,
        "input": "2025-12-31\n2026-01-01",
        "expected": "1",
        "explanation": "1 day difference across year boundary."
      }
    ]
  },
  "q37_jvm_stack_vs_heap_variables": {
    "num": "37",
    "id": "q37_jvm_stack_vs_heap_variables",
    "title": "JVM Stack Local Variables vs Heap Array Allocation",
    "tag": "JVM Architecture & Memory",
    "category": "JVM Architecture & Memory",
    "subtitle": "Primitive Stack Storage vs Heap Object Allocation",
    "brief": "A Java application creates several local integer variables inside a method. The program must demonstrate the difference between local variables and dynamically created objects.\n\nWrite a Java program containing a method that creates local primitive variables and an integer array using the new keyword. Print the values of the variables and array elements.\n\nThe objective is to demonstrate that local variables are associated with method execution while dynamically created objects are stored in heap memory.\n\nConstraints:\n-10000 <= Value <= 10000",
    "inputFormat": "The first line contains three integers.\nThe second line contains three integers for the array.",
    "outputFormat": "Print the three local values on the first line and the three array values on the second line.",
    "starterCode": "import java.util.Scanner;\n\nclass Main {\n    public static void demonstrateMemory(int a, int b, int c, int[] arr) {\n        // Print local primitive variables on line 1, array elements on line 2\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read 3 local integers and 3 array integers using new int[3]\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Main {\n    public static void demonstrateMemory(int a, int b, int c, int[] arr) {\n        System.out.println(a + \" \" + b + \" \" + c);\n        System.out.println(arr[0] + \" \" + arr[1] + \" \" + arr[2]);\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int a = sc.nextInt();\n        int b = sc.nextInt();\n        int c = sc.nextInt();\n\n        int[] heapArr = new int[3];\n        heapArr[0] = sc.nextInt();\n        heapArr[1] = sc.nextInt();\n        heapArr[2] = sc.nextInt();\n\n        demonstrateMemory(a, b, c, heapArr);\n    }\n}",
    "hints": [
      {
        "title": "Stack vs Heap",
        "text": "Local variables <code>a, b, c</code> live on the thread call stack; <code>heapArr</code> is allocated on the heap via <code>new int[3]</code>."
      },
      {
        "title": "Format",
        "text": "Print local variables space-separated on line 1, and array elements on line 2."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "10 20 30\n40 50 60",
        "expected": "10 20 30\n40 50 60",
        "explanation": "Prints 10 20 30 on first line and 40 50 60 on second line."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "0 0 0\n1 1 1",
        "expected": "0 0 0\n1 1 1",
        "explanation": "Zeros on stack, ones on heap."
      },
      {
        "id": 3,
        "input": "-1 -2 -3\n-4 -5 -6",
        "expected": "-1 -2 -3\n-4 -5 -6",
        "explanation": "Negative integers printed correctly."
      }
    ]
  },
  "q38_method_local_array_marks_sum": {
    "num": "38",
    "id": "q38_method_local_array_marks_sum",
    "title": "Student Marks Sum via Method-Local Array",
    "tag": "Method Execution & Arrays",
    "category": "JVM Architecture & Memory",
    "subtitle": "Method Scope & Array Object Lifecycle",
    "brief": "A student-result application uses a method to calculate the total marks of a student. The method receives three marks and creates an integer array containing the marks.\n\nWrite a Java program that uses a separate method to calculate and print the total marks. The program should demonstrate method-local variables and an array object created during execution.\n\nConstraints:\n0 <= Marks <= 100",
    "inputFormat": "The first line contains three subject marks.",
    "outputFormat": "Print the total marks.",
    "starterCode": "import java.util.Scanner;\n\nclass Main {\n    public static void calculateTotalMarks(int m1, int m2, int m3) {\n        // Create an array inside method to store marks and compute sum\n        \n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read 3 marks and call calculateTotalMarks()\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Main {\n    public static void calculateTotalMarks(int m1, int m2, int m3) {\n        int[] marks = new int[]{ m1, m2, m3 };\n        int total = 0;\n        for (int m : marks) {\n            total += m;\n        }\n        System.out.println(total);\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int m1 = sc.nextInt();\n        int m2 = sc.nextInt();\n        int m3 = sc.nextInt();\n\n        calculateTotalMarks(m1, m2, m3);\n    }\n}",
    "hints": [
      {
        "title": "Local Array",
        "text": "Inside <code>calculateTotalMarks</code>, declare <code>int[] marks = {m1, m2, m3};</code> and loop to sum."
      },
      {
        "title": "Encapsulation",
        "text": "The method performs the calculation and prints the total directly."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "75 82 90",
        "expected": "247",
        "explanation": "75 + 82 + 90 = 247."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "0 0 0",
        "expected": "0",
        "explanation": "Sum of 0 marks is 0."
      },
      {
        "id": 3,
        "input": "100 100 100",
        "expected": "300",
        "explanation": "Perfect score total is 300."
      }
    ]
  },
  "q39_jvm_garbage_collection_request": {
    "num": "39",
    "id": "q39_jvm_garbage_collection_request",
    "title": "JVM Garbage Collection Explicit Request",
    "tag": "Garbage Collection & System.gc()",
    "category": "JVM Architecture & Memory",
    "subtitle": "Unreferencing Objects & Requesting System.gc()",
    "brief": "A document-processing application creates temporary String objects while processing documents. After the objects are no longer required, the application requests the JVM to perform garbage collection.\n\nWrite a Java program that creates a specified number of temporary objects, removes their references, requests garbage collection using the appropriate JVM method, and finally prints Garbage Collection Requested.\n\nConstraints:\n1 <= N <= 10000",
    "inputFormat": "The first line contains the number of temporary objects.",
    "outputFormat": "Print:\nGarbage Collection Requested",
    "starterCode": "import java.util.Scanner;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read N temporary objects count\n        \n        // Nullify references, request JVM GC using System.gc(), and print message\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n\n        for (int i = 0; i < n; i++) {\n            String temp = new String(\"DocumentData_\" + i);\n        }\n\n        System.gc();\n        System.out.println(\"Garbage Collection Requested\");\n    }\n}",
    "hints": [
      {
        "title": "JVM GC Call",
        "text": "Invoke <code>System.gc();</code> or <code>Runtime.getRuntime().gc();</code> to notify the JVM."
      },
      {
        "title": "Output Requirement",
        "text": "Print exactly <code>Garbage Collection Requested</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "100",
        "expected": "Garbage Collection Requested",
        "explanation": "100 temporary objects created and System.gc() requested."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "1",
        "expected": "Garbage Collection Requested",
        "explanation": "Single object allocation followed by GC request."
      },
      {
        "id": 3,
        "input": "5000",
        "expected": "Garbage Collection Requested",
        "explanation": "5000 objects allocation followed by GC request."
      }
    ]
  },
  "q40_jvm_bytecode_payroll_salary": {
    "num": "40",
    "id": "q40_jvm_bytecode_payroll_salary",
    "title": "Employee Payroll Final Salary Bytecode Execution",
    "tag": "Bytecode & Basic Arithmetic",
    "category": "Java Basics & Data Types",
    "subtitle": "Basic Salary, Allowance & Deduction Calculation",
    "brief": "A payroll application calculates the salary of an employee using a simple arithmetic expression. Java source code is compiled into bytecode, which is executed by the JVM.\n\nWrite a Java program that reads the basic salary, allowance, and deduction and calculates the final salary.\n\nFinal Salary = Basic Salary + Allowance − Deduction\n\nConstraints:\n0 <= Basic Salary <= 1000000\n0 <= Allowance <= 500000\n0 <= Deduction <= 500000",
    "inputFormat": "The first line contains the basic salary.\nThe second line contains the allowance.\nThe third line contains the deduction.",
    "outputFormat": "Print the final salary.",
    "starterCode": "import java.util.Scanner;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read basic salary, allowance, deduction\n        \n        // Final Salary = Basic Salary + Allowance - Deduction\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLong()) return;\n        long basic = sc.nextLong();\n        long allowance = sc.nextLong();\n        long deduction = sc.nextLong();\n\n        long finalSalary = basic + allowance - deduction;\n        System.out.println(finalSalary);\n    }\n}",
    "hints": [
      {
        "title": "Formula",
        "text": "Compute <code>finalSalary = basic + allowance - deduction;</code>."
      },
      {
        "title": "Type Safety",
        "text": "Use <code>long</code> to prevent any potential overflow on large compensation figures."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "30000\n5000\n2000",
        "expected": "33000",
        "explanation": "30000 + 5000 - 2000 = 33000."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "0\n0\n0",
        "expected": "0",
        "explanation": "0 final salary."
      },
      {
        "id": 3,
        "input": "100000\n20000\n15000",
        "expected": "105000",
        "explanation": "100000 + 20000 - 15000 = 105000."
      }
    ]
  },
  "q41_stringbuilder_batch_squares": {
    "num": "41",
    "id": "q41_stringbuilder_batch_squares",
    "title": "Data Analysis Batch Integer Squares with StringBuilder",
    "tag": "Fast I/O & StringBuilder",
    "category": "Fast I/O & StringBuilder",
    "subtitle": "Buffered Output Construction via StringBuilder",
    "brief": "A data-analysis application receives a large number of integers. To reduce unnecessary output operations, the application must first calculate all results and then print them together.\n\nWrite a Java program that reads N integers, calculates the square of every integer, stores the results in a StringBuilder, and prints all results at once.\n\nConstraints:\n1 <= N <= 100000\n-1000 <= Value <= 1000",
    "inputFormat": "The first line contains N.\nThe second line contains N integers.",
    "outputFormat": "Print the squares separated by spaces.",
    "starterCode": "import java.util.Scanner;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read N and integers, append squares to StringBuilder, print once\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        StringBuilder sb = new StringBuilder();\n\n        for (int i = 0; i < n; i++) {\n            long val = sc.nextLong();\n            if (i > 0) sb.append(\" \");\n            sb.append(val * val);\n        }\n\n        System.out.println(sb.toString());\n    }\n}",
    "hints": [
      {
        "title": "Single Print Call",
        "text": "Append each computed square to <code>StringBuilder</code> and print once with <code>System.out.println(sb.toString());</code>."
      },
      {
        "title": "Delimiter Handling",
        "text": "Append space separator <code>if (i > 0) sb.append(\" \");</code> before each square."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "5\n2 3 4 5 6",
        "expected": "4 9 16 25 36",
        "explanation": "2^2=4, 3^2=9, 4^2=16, 5^2=25, 6^2=36."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "1\n0",
        "expected": "0",
        "explanation": "0 squared is 0."
      },
      {
        "id": 3,
        "input": "3\n-2 -5 10",
        "expected": "4 25 100",
        "explanation": "Negative numbers square to positive values."
      }
    ]
  },
  "q42_bufferedreader_fast_sum": {
    "num": "42",
    "id": "q42_bufferedreader_fast_sum",
    "title": "Competitive Programming Fast Summation with BufferedReader",
    "tag": "BufferedReader & Fast I/O",
    "category": "Fast I/O & StringBuilder",
    "subtitle": "BufferedReader and StringTokenizer Stream Parsing",
    "brief": "A competitive-programming system receives a large number of integer values. The program must efficiently read all values and calculate their sum.\n\nWrite a Java program using buffered input to efficiently read N integers and calculate their sum.\n\nConstraints:\n1 <= N <= 100000\n0 <= Value <= 100000",
    "inputFormat": "The first line contains N.\nThe second line contains N integers separated by spaces.",
    "outputFormat": "Print the sum of all integers.",
    "starterCode": "import java.io.*;\nimport java.util.*;\n\nclass Main {\n    public static void main(String[] args) throws IOException {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // Efficiently read N integers and sum them up\n        \n    }\n}",
    "solutionCode": "import java.io.*;\nimport java.util.*;\n\nclass Main {\n    public static void main(String[] args) throws IOException {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line = br.readLine();\n        if (line == null || line.trim().isEmpty()) return;\n        int n = Integer.parseInt(line.trim());\n\n        long sum = 0;\n        int count = 0;\n        while (count < n && (line = br.readLine()) != null) {\n            StringTokenizer st = new StringTokenizer(line);\n            while (st.hasMoreTokens() && count < n) {\n                sum += Long.parseLong(st.nextToken());\n                count++;\n            }\n        }\n\n        System.out.println(sum);\n    }\n}",
    "hints": [
      {
        "title": "Fast Input",
        "text": "Use <code>BufferedReader</code> and <code>StringTokenizer</code> for O(N) linear-time stream reading."
      },
      {
        "title": "Long Accumulator",
        "text": "Use <code>long sum</code> to prevent overflow when summing up to 100,000 values."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "5\n10 20 30 40 50",
        "expected": "150",
        "explanation": "10 + 20 + 30 + 40 + 50 = 150."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "1\n100000",
        "expected": "100000",
        "explanation": "Single large integer sum."
      },
      {
        "id": 3,
        "input": "3\n0 0 0",
        "expected": "0",
        "explanation": "Sum of zeros is 0."
      }
    ]
  },
  "q43_buffered_io_weather_temperatures": {
    "num": "43",
    "id": "q43_buffered_io_weather_temperatures",
    "title": "Weather Stream Buffering with BufferedReader and StringBuilder",
    "tag": "Buffered I/O & Processing",
    "category": "Fast I/O & StringBuilder",
    "subtitle": "Combining BufferedReader & StringBuilder for High Throughput",
    "brief": "A weather-monitoring system receives temperature readings continuously. Instead of printing each processed reading immediately, the system should construct the complete report using buffering.\n\nFor each temperature, calculate:\nProcessed Temperature = Temperature + 2\n\nUse BufferedReader for input and StringBuilder for constructing the output.\n\nConstraints:\n1 <= N <= 100000\n-100 <= Temperature <= 100",
    "inputFormat": "The first line contains N.\nThe second line contains N temperature readings.",
    "outputFormat": "Print the processed temperatures separated by spaces.",
    "starterCode": "import java.io.*;\nimport java.util.*;\n\nclass Main {\n    public static void main(String[] args) throws IOException {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // Read temperatures with BufferedReader, add 2, append to StringBuilder\n        \n    }\n}",
    "solutionCode": "import java.io.*;\nimport java.util.*;\n\nclass Main {\n    public static void main(String[] args) throws IOException {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line = br.readLine();\n        if (line == null || line.trim().isEmpty()) return;\n        int n = Integer.parseInt(line.trim());\n\n        StringBuilder sb = new StringBuilder();\n        int count = 0;\n\n        while (count < n && (line = br.readLine()) != null) {\n            StringTokenizer st = new StringTokenizer(line);\n            while (st.hasMoreTokens() && count < n) {\n                int temp = Integer.parseInt(st.nextToken());\n                if (count > 0) sb.append(\" \");\n                sb.append(temp + 2);\n                count++;\n            }\n        }\n\n        System.out.println(sb.toString());\n    }\n}",
    "hints": [
      {
        "title": "Transformation",
        "text": "Add 2 to each reading: <code>temp + 2</code>."
      },
      {
        "title": "Batch Output",
        "text": "Accumulate into <code>StringBuilder</code> and print once."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "4\n20 25 30 35",
        "expected": "22 27 32 37",
        "explanation": "20+2=22, 25+2=27, 30+2=32, 35+2=37."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "1\n-2",
        "expected": "0",
        "explanation": "-2 + 2 = 0."
      },
      {
        "id": 3,
        "input": "3\n-50 0 50",
        "expected": "-48 2 52",
        "explanation": "Negative and positive temperatures incremented by 2."
      }
    ]
  },
  "q44_billing_application_logic_correction": {
    "num": "44",
    "id": "q44_billing_application_logic_correction",
    "title": "Billing Application Logic Correction",
    "tag": "Bug Fixing & Arithmetic",
    "category": "Control Flow & Logic",
    "subtitle": "Quantity * Price Total Cost Accumulation",
    "brief": "A billing application calculates the total cost of purchased items. Due to an error in the existing logic, the total is incorrectly calculated.\n\nThe correct formula is:\nTotal = Quantity × Price\n\nWrite a Java program with the corrected logic to calculate the total cost of each item and print the final total.\n\nConstraints:\n1 <= N <= 100\n1 <= Quantity <= 1000\n1 <= Price <= 100000",
    "inputFormat": "The first line contains N.\nEach of the next N lines contains quantity and price.",
    "outputFormat": "Print the total cost of all items.",
    "starterCode": "import java.util.Scanner;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read N items and calculate cumulative total = Quantity * Price\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        long total = 0;\n\n        for (int i = 0; i < n; i++) {\n            long qty = sc.nextLong();\n            long price = sc.nextLong();\n            total += qty * price;\n        }\n\n        System.out.println(total);\n    }\n}",
    "hints": [
      {
        "title": "Multiplication Order",
        "text": "For each item, multiply <code>qty * price</code> and add to the running total accumulator."
      },
      {
        "title": "64-bit Integer",
        "text": "Use <code>long</code> to safely accumulate large item costs."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "3\n5 100\n5 50\n3 200",
        "expected": "1350",
        "explanation": "5*100=500, 5*50=250, 3*200=600. Total = 500 + 250 + 600 = 1350."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "1\n10 10",
        "expected": "100",
        "explanation": "10 * 10 = 100."
      },
      {
        "id": 3,
        "input": "2\n1 500\n2 250",
        "expected": "1000",
        "explanation": "500 + 500 = 1000."
      }
    ]
  },
  "q45_parking_fee_edge_case_handling": {
    "num": "45",
    "id": "q45_parking_fee_edge_case_handling",
    "title": "Parking Management Fee Calculation & Edge Cases",
    "tag": "Branching & Boundary Conditions",
    "category": "Control Flow & Logic",
    "subtitle": "Handling Zero, Normal & Tiered Boundary Rates",
    "brief": "A parking-management system calculates the parking fee based on the number of hours a vehicle stays in the parking area.\n\nThe fee rules are:\n0 hours -> 0\n1 to 2 hours -> 20 per hour\nMore than 2 hours -> 40 per hour\n\nWrite a Java program that correctly handles normal cases as well as the edge cases of zero hours and exactly two hours.\n\nConstraints:\n0 <= Hours <= 100",
    "inputFormat": "The first line contains the number of parking hours.",
    "outputFormat": "Print the parking fee.",
    "starterCode": "import java.util.Scanner;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read parking hours and calculate fee according to tiered rates\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int hours = sc.nextInt();\n\n        int fee = 0;\n        if (hours == 0) {\n            fee = 0;\n        } else if (hours <= 2) {\n            fee = hours * 20;\n        } else {\n            fee = hours * 40;\n        }\n\n        System.out.println(fee);\n    }\n}",
    "hints": [
      {
        "title": "Edge Case 0",
        "text": "Check <code>hours == 0</code> first to return <code>0</code>."
      },
      {
        "title": "Tiered Calculation",
        "text": "For <code>hours <= 2</code>, multiply <code>hours * 20</code>; for <code>hours > 2</code>, multiply <code>hours * 40</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "2",
        "expected": "40",
        "explanation": "Exactly 2 hours falls in 1-2 hour tier: 2 * 20 = 40."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "0",
        "expected": "0",
        "explanation": "0 hours fee is 0."
      },
      {
        "id": 3,
        "input": "3",
        "expected": "120",
        "explanation": "3 hours (> 2) fee: 3 * 40 = 120."
      }
    ]
  },
  "q46_functional_interface_method_argument": {
    "num": "46",
    "id": "q46_functional_interface_method_argument",
    "title": "Financial Operation via Functional Interface Argument",
    "tag": "Functional Interface Parameter",
    "category": "Functional Programming & Lambdas",
    "subtitle": "Passing Custom Operations as Method Arguments",
    "brief": "A financial application needs to apply different operations to an amount. The supported operations are addition of a fixed value and multiplication by a fixed value.\n\nWrite a Java program that passes a functional interface as an argument to a method. The method should apply the received operation to the given amount.\n\nConstraints:\n0 <= Amount <= 100000\n0 <= Value <= 1000",
    "inputFormat": "The first line contains the amount.\nThe second line contains the operation value.\nThe third line contains the operation type: ADD or MULTIPLY.",
    "outputFormat": "Print the resulting amount.",
    "starterCode": "import java.util.Scanner;\n\n@FunctionalInterface\ninterface FinancialOperation {\n    long apply(long amount, long value);\n}\n\nclass Main {\n    public static long executeOperation(long amount, long value, FinancialOperation op) {\n        return op.apply(amount, value);\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read amount, value, and operation type (ADD / MULTIPLY)\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\n@FunctionalInterface\ninterface FinancialOperation {\n    long apply(long amount, long value);\n}\n\nclass Main {\n    public static long executeOperation(long amount, long value, FinancialOperation op) {\n        return op.apply(amount, value);\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLong()) return;\n        long amount = sc.nextLong();\n        long value = sc.nextLong();\n        String opType = sc.next().trim();\n\n        FinancialOperation op;\n        if (\"ADD\".equalsIgnoreCase(opType)) {\n            op = (a, v) -> a + v;\n        } else {\n            op = (a, v) -> a * v;\n        }\n\n        long result = executeOperation(amount, value, op);\n        System.out.println(result);\n    }\n}",
    "hints": [
      {
        "title": "Functional Strategy",
        "text": "Select the lambda <code>(a, v) -> a + v</code> or <code>(a, v) -> a * v</code> based on the command string."
      },
      {
        "title": "Method Parameter",
        "text": "Pass the lambda into <code>executeOperation(amount, value, op)</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "1000\n50\nADD",
        "expected": "1050",
        "explanation": "1000 + 50 = 1050."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "200\n3\nMULTIPLY",
        "expected": "600",
        "explanation": "200 * 3 = 600."
      },
      {
        "id": 3,
        "input": "0\n100\nADD",
        "expected": "100",
        "explanation": "0 + 100 = 100."
      }
    ]
  },
  "q47_method_reference_string_uppercase": {
    "num": "47",
    "id": "q47_method_reference_string_uppercase",
    "title": "Student Names Uppercase Conversion with Method Reference",
    "tag": "Method References",
    "category": "Functional Programming & Lambdas",
    "subtitle": "String::toUpperCase Method Reference Transformation",
    "brief": "A student-information system stores the names of students. The system needs to print each student name in uppercase.\n\nWrite a Java program using a method reference to refer to the appropriate String method for converting each name to uppercase.\n\nConstraints:\n1 <= N <= 100\nEach name contains only alphabetic characters.",
    "inputFormat": "The first line contains N.\nThe second line contains N student names separated by spaces.",
    "outputFormat": "Print all student names in uppercase separated by spaces.",
    "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read names into List<String>\n        \n        // Use method reference String::toUpperCase with Stream API\n        \n    }\n}",
    "solutionCode": "import java.util.*;\nimport java.util.stream.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        List<String> names = new ArrayList<>();\n        for (int i = 0; i < n; i++) names.add(sc.next());\n\n        String result = names.stream()\n            .map(String::toUpperCase)\n            .collect(Collectors.joining(\" \"));\n\n        System.out.println(result);\n    }\n}",
    "hints": [
      {
        "title": "Method Reference Syntax",
        "text": "Use <code>.map(String::toUpperCase)</code> instead of the lambda <code>.map(s -> s.toUpperCase())</code>."
      },
      {
        "title": "Joining",
        "text": "Use <code>Collectors.joining(\" \")</code> to produce space-separated output."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "3\namit neha rahul",
        "expected": "AMIT NEHA RAHUL",
        "explanation": "amit -> AMIT, neha -> NEHA, rahul -> RAHUL."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "1\njava",
        "expected": "JAVA",
        "explanation": "Single word converted to upper case."
      },
      {
        "id": 3,
        "input": "2\nALPHA BETA",
        "expected": "ALPHA BETA",
        "explanation": "Already uppercase remains unchanged."
      }
    ]
  },
  "q48_warehouse_functional_interfaces_pass": {
    "num": "48",
    "id": "q48_warehouse_functional_interfaces_pass",
    "title": "Warehouse Stock Evaluation via Functional Interfaces",
    "tag": "Functional Interfaces & Lambdas",
    "category": "Functional Programming & Lambdas",
    "subtitle": "Passing Predicate and Function to Separate Methods",
    "brief": "A warehouse system evaluates product quantities using different rules. One rule determines whether a product quantity is greater than 50, while another calculates the quantity after adding a safety stock of 10 units.\n\nWrite a Java program that uses functional interfaces and passes functions to separate methods to perform these operations.\n\nConstraints:\n1 <= N <= 100\n0 <= Quantity <= 1000",
    "inputFormat": "The first line contains N.\nThe second line contains N product quantities.",
    "outputFormat": "First print the number of products having quantity greater than 50.\nOn the second line, print the updated quantities after adding 10.",
    "starterCode": "import java.util.*;\nimport java.util.function.*;\n\nclass Main {\n    public static long countMatching(List<Integer> list, Predicate<Integer> condition) {\n        return list.stream().filter(condition).count();\n    }\n\n    public static List<Integer> transformList(List<Integer> list, Function<Integer, Integer> transform) {\n        // Implement list transformation\n        return null;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read quantities and apply functional evaluation methods\n        \n    }\n}",
    "solutionCode": "import java.util.*;\nimport java.util.function.*;\nimport java.util.stream.*;\n\nclass Main {\n    public static long countMatching(List<Integer> list, Predicate<Integer> condition) {\n        return list.stream().filter(condition).count();\n    }\n\n    public static List<Integer> transformList(List<Integer> list, Function<Integer, Integer> transform) {\n        return list.stream().map(transform).collect(Collectors.toList());\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        List<Integer> list = new ArrayList<>();\n        for (int i = 0; i < n; i++) list.add(sc.nextInt());\n\n        long count = countMatching(list, q -> q > 50);\n        List<Integer> updated = transformList(list, q -> q + 10);\n\n        System.out.println(count);\n        System.out.println(updated.stream().map(String::valueOf).collect(Collectors.joining(\" \")));\n    }\n}",
    "hints": [
      {
        "title": "Predicate Method",
        "text": "Pass <code>q -> q > 50</code> to count matching elements."
      },
      {
        "title": "Function Method",
        "text": "Pass <code>q -> q + 10</code> to add 10 to each quantity."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "5\n20 60 45 80 100",
        "expected": "3\n30 70 55 90 110",
        "explanation": "3 items (60, 80, 100) are > 50. Each item + 10 yields 30 70 55 90 110."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "2\n10 20",
        "expected": "0\n20 30",
        "explanation": "0 items > 50. Quantities + 10 are 20 30."
      },
      {
        "id": 3,
        "input": "1\n50",
        "expected": "0\n60",
        "explanation": "Strictly greater than 50 excludes 50. 50 + 10 = 60."
      }
    ]
  },
  "q49_multithreading_thread_join": {
    "num": "49",
    "id": "q49_multithreading_thread_join",
    "title": "Railway Ticketing Thread Coordination with join()",
    "tag": "Multithreading - join()",
    "category": "Multithreading & Concurrency",
    "subtitle": "Thread Lifecycle, Execution and join() Barrier",
    "brief": "A railway ticketing system processes a number of ticket requests using a separate thread. The system should start the ticket-processing thread, allow it to process all requests, and wait for the thread to complete before the main program continues.\n\nWrite a Java program that creates a thread to process the given number of ticket requests. The thread should print the number of processed requests. The main thread must wait for the ticket-processing thread to complete using join().\n\nConstraints:\n0 <= N <= 1000",
    "inputFormat": "The first line contains the number of ticket requests.",
    "outputFormat": "The thread should print the number of processed tickets. After the thread completes, print Processing Completed.",
    "starterCode": "import java.util.Scanner;\n\nclass TicketProcessor extends Thread {\n    private int count;\n\n    public TicketProcessor(int count) {\n        this.count = count;\n    }\n\n    public void run() {\n        // Print processed count\n    }\n}\n\nclass Main {\n    public static void main(String[] args) throws InterruptedException {\n        Scanner sc = new Scanner(System.in);\n        // Start thread, join(), and print Processing Completed\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass TicketProcessor extends Thread {\n    private int count;\n\n    public TicketProcessor(int count) {\n        this.count = count;\n    }\n\n    @Override\n    public void run() {\n        System.out.println(\"Tickets Processed: \" + count);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) throws InterruptedException {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n\n        TicketProcessor t = new TicketProcessor(n);\n        t.start();\n        t.join();\n\n        System.out.println(\"Processing Completed\");\n    }\n}",
    "hints": [
      {
        "title": "Thread Execution",
        "text": "Call <code>t.start()</code> to launch asynchronous execution in a new thread."
      },
      {
        "title": "Thread Join",
        "text": "Call <code>t.join()</code> in the main thread to block until the worker thread has finished."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "5",
        "expected": "Tickets Processed: 5\nProcessing Completed",
        "explanation": "Thread displays processed tickets count, followed by main thread completing."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "0",
        "expected": "Tickets Processed: 0\nProcessing Completed",
        "explanation": "0 tickets processed correctly."
      },
      {
        "id": 3,
        "input": "100",
        "expected": "Tickets Processed: 100\nProcessing Completed",
        "explanation": "100 tickets processed."
      }
    ]
  },
  "q50_multithreading_extending_thread_class": {
    "num": "50",
    "id": "q50_multithreading_extending_thread_class",
    "title": "Food Delivery Order Processing by Extending Thread",
    "tag": "Multithreading - Thread Class",
    "category": "Multithreading & Concurrency",
    "subtitle": "Subclassing java.lang.Thread & Overriding run()",
    "brief": "A food-delivery application processes customer orders in a separate thread. Each order has an order ID, and the application must create a thread by extending the Thread class.\n\nWrite a Java program that creates a class extending Thread. The thread should process the given order and print its order ID.\n\nConstraints:\n1 <= Order ID <= 100000",
    "inputFormat": "The first line contains the order ID.",
    "outputFormat": "Print:\nOrder <ID> Processing",
    "starterCode": "import java.util.Scanner;\n\n// Create class OrderProcessor extending Thread\nclass OrderProcessor extends Thread {\n    // Implement constructor and run() method\n}\n\nclass Main {\n    public static void main(String[] args) throws InterruptedException {\n        Scanner sc = new Scanner(System.in);\n        // Read order ID, start thread, and join()\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass OrderProcessor extends Thread {\n    private int orderId;\n\n    public OrderProcessor(int orderId) {\n        this.orderId = orderId;\n    }\n\n    @Override\n    public void run() {\n        System.out.println(\"Order \" + orderId + \" Processing\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) throws InterruptedException {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int orderId = sc.nextInt();\n\n        OrderProcessor op = new OrderProcessor(orderId);\n        op.start();\n        op.join();\n    }\n}",
    "hints": [
      {
        "title": "Extend Thread",
        "text": "Subclass <code>java.lang.Thread</code> and override the <code>run()</code> method."
      },
      {
        "title": "Output String",
        "text": "Inside <code>run()</code>, print <code>\"Order \" + orderId + \" Processing\"</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "105",
        "expected": "Order 105 Processing",
        "explanation": "Thread executes and prints order 105 processing."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "1",
        "expected": "Order 1 Processing",
        "explanation": "Single digit order ID."
      },
      {
        "id": 3,
        "input": "99999",
        "expected": "Order 99999 Processing",
        "explanation": "Five digit order ID."
      }
    ]
  },
  "q51_multithreading_runnable_interface": {
    "num": "51",
    "id": "q51_multithreading_runnable_interface",
    "title": "Hospital Monitoring System with Runnable Interface",
    "tag": "Multithreading - Runnable",
    "category": "Multithreading & Concurrency",
    "subtitle": "Implementing java.lang.Runnable Interface",
    "brief": "A hospital monitoring system receives heart-rate readings from a patient-monitoring device. The readings must be processed by a separate thread created using the Runnable interface.\n\nWrite a Java program that implements Runnable and creates a thread to display each heart-rate reading.\n\nConstraints:\n1 <= N <= 100\n40 <= Reading <= 200",
    "inputFormat": "The first line contains the number of readings.\nThe second line contains N heart-rate readings separated by spaces.",
    "outputFormat": "For every reading, print:\nMonitoring: <reading>\nEach reading should be printed on a separate line.",
    "starterCode": "import java.util.*;\n\n// Implement Runnable interface\nclass HeartRateMonitor implements Runnable {\n    private List<Integer> readings;\n\n    public HeartRateMonitor(List<Integer> readings) {\n        this.readings = readings;\n    }\n\n    public void run() {\n        // Display each reading\n    }\n}\n\nclass Main {\n    public static void main(String[] args) throws InterruptedException {\n        Scanner sc = new Scanner(System.in);\n        // Create HeartRateMonitor and execute inside Thread\n        \n    }\n}",
    "solutionCode": "import java.util.*;\n\nclass HeartRateMonitor implements Runnable {\n    private List<Integer> readings;\n\n    public HeartRateMonitor(List<Integer> readings) {\n        this.readings = readings;\n    }\n\n    @Override\n    public void run() {\n        for (int r : readings) {\n            System.out.println(\"Monitoring: \" + r);\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) throws InterruptedException {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        List<Integer> list = new ArrayList<>();\n        for (int i = 0; i < n; i++) list.add(sc.nextInt());\n\n        Thread t = new Thread(new HeartRateMonitor(list));\n        t.start();\n        t.join();\n    }\n}",
    "hints": [
      {
        "title": "Runnable Implementation",
        "text": "Implement <code>run()</code> and pass the Runnable instance into <code>new Thread(runnable)</code>."
      },
      {
        "title": "Output Format",
        "text": "Print each line as <code>\"Monitoring: \" + reading</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "3\n72 80 76",
        "expected": "Monitoring: 72\nMonitoring: 80\nMonitoring: 76",
        "explanation": "Thread prints monitoring heart rate for 72, 80, and 76."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "1\n60",
        "expected": "Monitoring: 60",
        "explanation": "Single heart rate reading."
      },
      {
        "id": 3,
        "input": "2\n120 140",
        "expected": "Monitoring: 120\nMonitoring: 140",
        "explanation": "Elevated heart rate readings."
      }
    ]
  },
  "q52_synchronized_method_bank_withdrawal": {
    "num": "52",
    "id": "q52_synchronized_method_bank_withdrawal",
    "title": "Concurrent Bank Account Withdrawal Synchronization",
    "tag": "Synchronization - Method",
    "category": "Multithreading & Concurrency",
    "subtitle": "Thread Safety via Synchronized Method",
    "brief": "A bank account is accessed by two withdrawal requests running in separate threads. Both requests operate on the same account balance.\n\nWrite a Java program using a synchronized withdrawal method so that only one thread can modify the account balance at a time.\n\nIf sufficient balance is available, the amount should be withdrawn. Otherwise, print Insufficient Balance.\n\nConstraints:\n0 <= Balance <= 1000000\n0 <= Withdrawal Amount <= 1000000",
    "inputFormat": "The first line contains the initial account balance.\nThe second line contains the withdrawal amount requested by the first thread.\nThe third line contains the withdrawal amount requested by the second thread.",
    "outputFormat": "If a withdrawal cannot be completed, print Insufficient Balance.\nAfter both threads finish, print:\nFinal Balance: <balance>",
    "starterCode": "import java.util.Scanner;\n\nclass BankAccount {\n    private int balance;\n\n    public BankAccount(int balance) {\n        this.balance = balance;\n    }\n\n    public synchronized void withdraw(int amount) {\n        // Check balance, deduct, or print Insufficient Balance\n    }\n\n    public int getBalance() {\n        return balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) throws InterruptedException {\n        Scanner sc = new Scanner(System.in);\n        // Read balance, w1, w2, execute threads, print final balance\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass BankAccount {\n    private int balance;\n\n    public BankAccount(int balance) {\n        this.balance = balance;\n    }\n\n    public synchronized void withdraw(int amount) {\n        if (amount <= balance) {\n            balance -= amount;\n        } else {\n            System.out.println(\"Insufficient Balance\");\n        }\n    }\n\n    public int getBalance() {\n        return balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) throws InterruptedException {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int initial = sc.nextInt();\n        int w1 = sc.nextInt();\n        int w2 = sc.nextInt();\n\n        BankAccount account = new BankAccount(initial);\n\n        Thread t1 = new Thread(() -> account.withdraw(w1));\n        Thread t2 = new Thread(() -> account.withdraw(w2));\n\n        t1.start();\n        t1.join();\n        t2.start();\n        t2.join();\n\n        System.out.println(\"Final Balance: \" + account.getBalance());\n    }\n}",
    "hints": [
      {
        "title": "Synchronized Method",
        "text": "Declare <code>public synchronized void withdraw(int amount)</code> to lock the account instance."
      },
      {
        "title": "Thread Joining",
        "text": "Join both threads before printing <code>Final Balance: <balance></code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "10000\n3000\n4000",
        "expected": "Final Balance: 3000",
        "explanation": "Initial 10000 - 3000 - 4000 = 3000."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "5000\n4000\n2000",
        "expected": "Insufficient Balance\nFinal Balance: 1000",
        "explanation": "Second withdrawal exceeds remaining 1000 balance."
      },
      {
        "id": 3,
        "input": "1000\n1000\n500",
        "expected": "Insufficient Balance\nFinal Balance: 0",
        "explanation": "First withdraws all funds, second fails."
      }
    ]
  },
  "q53_synchronized_block_movie_tickets": {
    "num": "53",
    "id": "q53_synchronized_block_movie_tickets",
    "title": "Movie Ticket Reservation with Synchronized Block",
    "tag": "Synchronization - Block",
    "category": "Multithreading & Concurrency",
    "subtitle": "Protecting Critical Section with synchronized(lock)",
    "brief": "A movie-ticket booking system maintains a shared number of available tickets. Two booking threads attempt to reserve tickets simultaneously.\n\nWrite a Java program that uses a synchronized block to protect the critical section where tickets are booked.\n\nEach successful booking decreases the available ticket count by one. If there are not enough tickets, no additional tickets should be booked.\n\nConstraints:\n0 <= Tickets <= 10000\n0 <= Requests <= 10000",
    "inputFormat": "The first line contains the initial number of tickets.\nThe second line contains the number of booking requests.",
    "outputFormat": "Print:\nTickets Remaining: <number>",
    "starterCode": "import java.util.Scanner;\n\nclass Main {\n    public static void main(String[] args) throws InterruptedException {\n        Scanner sc = new Scanner(System.in);\n        // Read initial tickets and requests count\n        \n        // Use synchronized block to update tickets safely\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Main {\n    static int availableTickets;\n    static final Object lock = new Object();\n\n    public static void main(String[] args) throws InterruptedException {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        availableTickets = sc.nextInt();\n        int requests = sc.nextInt();\n\n        int half1 = requests / 2;\n        int half2 = requests - half1;\n\n        Runnable booker1 = () -> {\n            for (int i = 0; i < half1; i++) {\n                synchronized (lock) {\n                    if (availableTickets > 0) availableTickets--;\n                }\n            }\n        };\n\n        Runnable booker2 = () -> {\n            for (int i = 0; i < half2; i++) {\n                synchronized (lock) {\n                    if (availableTickets > 0) availableTickets--;\n                }\n            }\n        };\n\n        Thread t1 = new Thread(booker1);\n        Thread t2 = new Thread(booker2);\n\n        t1.start();\n        t2.start();\n        t1.join();\n        t2.join();\n\n        System.out.println(\"Tickets Remaining: \" + availableTickets);\n    }\n}",
    "hints": [
      {
        "title": "Synchronized Block",
        "text": "Wrap the check and decrement logic inside <code>synchronized (lock) { if (availableTickets > 0) availableTickets--; }</code>."
      },
      {
        "title": "Non-negative",
        "text": "Ensure available tickets never drop below 0."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "10\n6",
        "expected": "Tickets Remaining: 4",
        "explanation": "10 - 6 = 4 tickets remaining."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "5\n10",
        "expected": "Tickets Remaining: 0",
        "explanation": "More requests than available tickets leaves 0 remaining."
      },
      {
        "id": 3,
        "input": "0\n3",
        "expected": "Tickets Remaining: 0",
        "explanation": "0 initial tickets."
      }
    ]
  },
  "q54_race_condition_visitor_counter": {
    "num": "54",
    "id": "q54_race_condition_visitor_counter",
    "title": "Website Visitor Counter Race Condition Prevention",
    "tag": "Synchronization - Race Conditions",
    "category": "Multithreading & Concurrency",
    "subtitle": "Thread Synchronization to Prevent Counter Loss",
    "brief": "A website maintains a shared visitor counter. Two threads represent two groups of visitors, and each thread increments the same counter.\n\nWithout proper synchronization, simultaneous updates can cause a race condition and produce an incorrect count.\n\nWrite a Java program that safely updates the shared counter using synchronization so that every visitor is counted.\n\nConstraints:\n0 <= N <= 100000",
    "inputFormat": "The first line contains the number of visitors handled by the first thread.\nThe second line contains the number of visitors handled by the second thread.",
    "outputFormat": "Print:\nTotal Visitors: <number>",
    "starterCode": "import java.util.Scanner;\n\nclass Counter {\n    private int count = 0;\n\n    public synchronized void increment() {\n        count++;\n    }\n\n    public int getCount() {\n        return count;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) throws InterruptedException {\n        Scanner sc = new Scanner(System.in);\n        // Read visitors from thread 1 and thread 2, increment safely, print total\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Counter {\n    private int count = 0;\n\n    public synchronized void increment() {\n        count++;\n    }\n\n    public int getCount() {\n        return count;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) throws InterruptedException {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int count1 = sc.nextInt();\n        int count2 = sc.nextInt();\n\n        Counter counter = new Counter();\n\n        Thread t1 = new Thread(() -> {\n            for (int i = 0; i < count1; i++) counter.increment();\n        });\n\n        Thread t2 = new Thread(() -> {\n            for (int i = 0; i < count2; i++) counter.increment();\n        });\n\n        t1.start();\n        t2.start();\n        t1.join();\n        t2.join();\n\n        System.out.println(\"Total Visitors: \" + counter.getCount());\n    }\n}",
    "hints": [
      {
        "title": "Atomic Increment",
        "text": "Ensure <code>increment()</code> is declared <code>synchronized</code> or uses <code>AtomicInteger</code> to prevent race conditions."
      },
      {
        "title": "Thread Coordination",
        "text": "Use <code>t1.join()</code> and <code>t2.join()</code> before retrieving the final count."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "5000\n7000",
        "expected": "Total Visitors: 12000",
        "explanation": "5000 + 7000 = 12000."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "0\n0",
        "expected": "Total Visitors: 0",
        "explanation": "0 visitors handled."
      },
      {
        "id": 3,
        "input": "1000\n0",
        "expected": "Total Visitors: 1000",
        "explanation": "Only thread 1 has visitors."
      }
    ]
  },
  "q55_deadlock_prevention_ordered_locks": {
    "num": "55",
    "id": "q55_deadlock_prevention_ordered_locks",
    "title": "Manufacturing Resource Deadlock Prevention",
    "tag": "Deadlock Prevention",
    "category": "Multithreading & Concurrency",
    "subtitle": "Global Lock Ordering to Prevent Circular Wait",
    "brief": "A manufacturing system has two shared resources required by two processing threads. If the threads acquire the resources in different orders, they may wait indefinitely for each other, resulting in a deadlock.\n\nWrite a Java program that uses two shared resources and ensures that both threads acquire the resources in the same order. This prevents deadlock and allows both operations to complete successfully.\n\nConstraints:\n1 <= N <= 1000",
    "inputFormat": "The first line contains the number of units processed by Thread 1.\nThe second line contains the number of units processed by Thread 2.",
    "outputFormat": "Print:\nThread 1 Completed\nThread 2 Completed\nProduction Completed",
    "starterCode": "import java.util.Scanner;\n\nclass Main {\n    static final Object resourceA = new Object();\n    static final Object resourceB = new Object();\n\n    public static void main(String[] args) throws InterruptedException {\n        Scanner sc = new Scanner(System.in);\n        // Acquire resourceA first, then resourceB in BOTH threads to avoid deadlock\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Main {\n    static final Object resourceA = new Object();\n    static final Object resourceB = new Object();\n\n    public static void main(String[] args) throws InterruptedException {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int units1 = sc.nextInt();\n        int units2 = sc.nextInt();\n\n        Thread t1 = new Thread(() -> {\n            synchronized (resourceA) {\n                synchronized (resourceB) {\n                    System.out.println(\"Thread 1 Completed\");\n                }\n            }\n        });\n\n        Thread t2 = new Thread(() -> {\n            synchronized (resourceA) {\n                synchronized (resourceB) {\n                    System.out.println(\"Thread 2 Completed\");\n                }\n            }\n        });\n\n        t1.start();\n        t1.join();\n        t2.start();\n        t2.join();\n\n        System.out.println(\"Production Completed\");\n    }\n}",
    "hints": [
      {
        "title": "Lock Ordering",
        "text": "Acquiring locks in the consistent order (A then B) eliminates Coffman's circular wait condition."
      },
      {
        "title": "Completion Message",
        "text": "Print <code>Production Completed</code> after both threads conclude."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "10\n20",
        "expected": "Thread 1 Completed\nThread 2 Completed\nProduction Completed",
        "explanation": "Both threads finish without deadlock and print completion statuses."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "1\n1",
        "expected": "Thread 1 Completed\nThread 2 Completed\nProduction Completed",
        "explanation": "Minimal units workload."
      },
      {
        "id": 3,
        "input": "500\n500",
        "expected": "Thread 1 Completed\nThread 2 Completed\nProduction Completed",
        "explanation": "Higher workload completes cleanly."
      }
    ]
  },
  "q56_livelock_simulation_retry_limit": {
    "num": "56",
    "id": "q56_livelock_simulation_retry_limit",
    "title": "Communication Channel Livelock Prevention with Retry Limit",
    "tag": "Livelock Prevention",
    "category": "Multithreading & Concurrency",
    "subtitle": "Bounded Retries to Escape Repeated Courteous Yielding",
    "brief": "A communication system has two threads that need to send messages through a shared communication channel. The threads repeatedly give way to each other instead of proceeding, which can result in a livelock.\n\nWrite a Java program that simulates a limited number of retry attempts. After the specified number of attempts, the communication should proceed successfully.\n\nConstraints:\n1 <= Attempts <= 10",
    "inputFormat": "The first line contains the maximum number of retry attempts.",
    "outputFormat": "Print:\nCommunication Started\nFor every unsuccessful retry, print:\nRetrying\nWhen communication succeeds, print:\nMessage Sent Successfully\nCommunication Completed",
    "starterCode": "import java.util.Scanner;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Simulate livelock avoidance with maximum retry attempts\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int maxAttempts = sc.nextInt();\n\n        System.out.println(\"Communication Started\");\n        for (int attempt = 1; attempt < maxAttempts; attempt++) {\n            System.out.println(\"Retrying\");\n        }\n        System.out.println(\"Message Sent Successfully\");\n        System.out.println(\"Communication Completed\");\n    }\n}",
    "hints": [
      {
        "title": "Retry Loop",
        "text": "Loop from 1 up to <code>maxAttempts - 1</code> printing <code>Retrying</code>."
      },
      {
        "title": "Termination",
        "text": "Print <code>Message Sent Successfully</code> and <code>Communication Completed</code> on success."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "3",
        "expected": "Communication Started\nRetrying\nRetrying\nMessage Sent Successfully\nCommunication Completed",
        "explanation": "Starts, retries twice, succeeds on 3rd attempt."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "1",
        "expected": "Communication Started\nMessage Sent Successfully\nCommunication Completed",
        "explanation": "Succeeds immediately with 0 retries."
      },
      {
        "id": 3,
        "input": "2",
        "expected": "Communication Started\nRetrying\nMessage Sent Successfully\nCommunication Completed",
        "explanation": "Retries once before succeeding."
      }
    ]
  },
  "q57_synchronized_exam_submission_counter": {
    "num": "57",
    "id": "q57_synchronized_exam_submission_counter",
    "title": "Online Examination Submission Counter Synchronization",
    "tag": "Synchronized Method Counter",
    "category": "Multithreading & Concurrency",
    "subtitle": "Thread-Safe Submission Accumulator",
    "brief": "An online examination system maintains a shared counter representing the number of submitted answers. Multiple student threads may submit answers at the same time.\n\nWrite a Java program using a synchronized method to ensure that every submission is counted correctly.\n\nConstraints:\n0 <= N <= 100000",
    "inputFormat": "The first line contains the number of submissions from the first group of students.\nThe second line contains the number of submissions from the second group.",
    "outputFormat": "Print:\nTotal Submissions: <number>",
    "starterCode": "import java.util.Scanner;\n\nclass SubmissionCounter {\n    private int submissions = 0;\n\n    public synchronized void submit(int count) {\n        submissions += count;\n    }\n\n    public int getSubmissions() {\n        return submissions;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) throws InterruptedException {\n        Scanner sc = new Scanner(System.in);\n        // Read group 1 and group 2 submissions, submit concurrently, print total\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass SubmissionCounter {\n    private int submissions = 0;\n\n    public synchronized void submit(int count) {\n        submissions += count;\n    }\n\n    public int getSubmissions() {\n        return submissions;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) throws InterruptedException {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int g1 = sc.nextInt();\n        int g2 = sc.nextInt();\n\n        SubmissionCounter counter = new SubmissionCounter();\n\n        Thread t1 = new Thread(() -> counter.submit(g1));\n        Thread t2 = new Thread(() -> counter.submit(g2));\n\n        t1.start();\n        t2.start();\n        t1.join();\n        t2.join();\n\n        System.out.println(\"Total Submissions: \" + counter.getSubmissions());\n    }\n}",
    "hints": [
      {
        "title": "Synchronized Method",
        "text": "Declare <code>public synchronized void submit(int count)</code> to serialize updates."
      },
      {
        "title": "Output Format",
        "text": "Print <code>\"Total Submissions: \" + counter.getSubmissions()</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "2500\n3500",
        "expected": "Total Submissions: 6000",
        "explanation": "2500 + 3500 = 6000."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "0\n0",
        "expected": "Total Submissions: 0",
        "explanation": "0 submissions."
      },
      {
        "id": 3,
        "input": "10000\n50000",
        "expected": "Total Submissions: 60000",
        "explanation": "10000 + 50000 = 60000."
      }
    ]
  },
  "q58_concurrent_collections_login_records": {
    "num": "58",
    "id": "q58_concurrent_collections_login_records",
    "title": "Server Login Requests Concurrent Collection Storage",
    "tag": "Concurrent Collections",
    "category": "Multithreading & Concurrency",
    "subtitle": "ConcurrentLinkedQueue / CopyOnWrite Thread-Safe Storage",
    "brief": "A server receives login requests from multiple threads. Each thread generates a set of login IDs, and the IDs must be stored in a thread-safe collection because multiple threads may add data concurrently.\n\nWrite a Java program using a concurrent collection to store the login IDs generated by two threads. After both threads finish, print the total number of stored login records.\n\nConstraints:\n0 <= N <= 100000",
    "inputFormat": "The first line contains the number of login records generated by the first thread.\nThe second line contains the number of login records generated by the second thread.",
    "outputFormat": "Print:\nTotal Login Records: <number>",
    "starterCode": "import java.util.Scanner;\nimport java.util.concurrent.ConcurrentLinkedQueue;\n\nclass Main {\n    public static void main(String[] args) throws InterruptedException {\n        Scanner sc = new Scanner(System.in);\n        ConcurrentLinkedQueue<Integer> queue = new ConcurrentLinkedQueue<>();\n        // Enqueue login IDs concurrently across two threads\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\nimport java.util.concurrent.ConcurrentLinkedQueue;\n\nclass Main {\n    public static void main(String[] args) throws InterruptedException {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n1 = sc.nextInt();\n        int n2 = sc.nextInt();\n\n        ConcurrentLinkedQueue<Integer> queue = new ConcurrentLinkedQueue<>();\n\n        Thread t1 = new Thread(() -> {\n            for (int i = 0; i < n1; i++) queue.add(i);\n        });\n\n        Thread t2 = new Thread(() -> {\n            for (int i = 0; i < n2; i++) queue.add(i);\n        });\n\n        t1.start();\n        t2.start();\n        t1.join();\n        t2.join();\n\n        System.out.println(\"Total Login Records: \" + queue.size());\n    }\n}",
    "hints": [
      {
        "title": "Thread-Safe Collection",
        "text": "Use <code>ConcurrentLinkedQueue<Integer></code> to allow lock-free, concurrent additions."
      },
      {
        "title": "Queue Size",
        "text": "After joining both threads, query <code>queue.size()</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "4000\n6000",
        "expected": "Total Login Records: 10000",
        "explanation": "4000 + 6000 = 10000 login records stored concurrently."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "0\n0",
        "expected": "Total Login Records: 0",
        "explanation": "0 login records."
      },
      {
        "id": 3,
        "input": "1\n99",
        "expected": "Total Login Records: 100",
        "explanation": "1 + 99 = 100 records."
      }
    ]
  },
  "q59_mysql_ddl_create_table_students": {
    "num": "59",
    "id": "q59_mysql_ddl_create_table_students",
    "title": "MySQL Table Creation and Constraints",
    "tag": "MySQL DDL & Constraints",
    "category": "SQL & Database Queries",
    "language": "sql",
    "subtitle": "PRIMARY KEY, NOT NULL, UNIQUE, and CHECK Constraints",
    "schemaSql": "CREATE TABLE Students (\n    student_id INT PRIMARY KEY,\n    student_name VARCHAR(100) NOT NULL,\n    email VARCHAR(100) UNIQUE,\n    age INT CHECK (age >= 17 AND age <= 60),\n    course VARCHAR(50)\n);",
    "brief": "A university is developing a student management system. The database must store student records while enforcing data integrity rules using constraints.\n\nWrite the DDL statement to create a table named `Students` with the following columns and constraints:\n• `student_id`: INT, PRIMARY KEY\n• `student_name`: VARCHAR(100), NOT NULL\n• `email`: VARCHAR(100), UNIQUE\n• `age`: INT, CHECK (age >= 17 AND age <= 60)\n• `course`: VARCHAR(50)\n\nFollowed by a SELECT query to display all records ordered by `student_id` in ascending order.\n\nExpected Output Format:\n`student_id student_name email age course`",
    "inputFormat": "Database Table: Students(student_id INT, student_name VARCHAR(100), email VARCHAR(100), age INT, course VARCHAR(50))",
    "outputFormat": "Display all student records in ascending order of student_id:\nstudent_id student_name email age course",
    "starterCode": "-- Write your DDL statement to create the Students table with constraints,\n-- followed by a query to display all students in ascending order of student_id.\n\n",
    "solutionCode": "CREATE TABLE Students (\n    student_id INT PRIMARY KEY,\n    student_name VARCHAR(100) NOT NULL,\n    email VARCHAR(100) UNIQUE,\n    age INT CHECK (age >= 17 AND age <= 60),\n    course VARCHAR(50)\n);\n\nSELECT * FROM Students ORDER BY student_id ASC;",
    "hints": [
      {
        "title": "Table Constraints",
        "text": "Use <code>PRIMARY KEY</code> on student_id, <code>NOT NULL</code> on student_name, <code>UNIQUE</code> on email, and <code>CHECK (age >= 17 AND age <= 60)</code>."
      },
      {
        "title": "Sorting Results",
        "text": "Append <code>ORDER BY student_id ASC;</code> to display the sorted rows."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "Table: Students (3 records inserted)",
        "seedSql": "INSERT INTO Students VALUES (101, 'Amit', 'amit@gmail.com', 20, 'CSE'), (102, 'Neha', 'neha@gmail.com', 21, 'ECE'), (103, 'Rahul', 'rahul@gmail.com', 22, 'CSE');",
        "expected": "101 Amit amit@gmail.com 20 CSE\n102 Neha neha@gmail.com 21 ECE\n103 Rahul rahul@gmail.com 22 CSE",
        "explanation": "Students table created and records displayed ordered by student_id ascending."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "Table: Students (Single record)",
        "seedSql": "INSERT INTO Students VALUES (200, 'Alex', 'alex@mail.com', 18, 'MECH');",
        "expected": "200 Alex alex@mail.com 18 MECH",
        "explanation": "Single record displayed with constraints satisfied."
      },
      {
        "id": 3,
        "input": "Table: Students (Unordered IDs)",
        "seedSql": "INSERT INTO Students VALUES (105, 'Zoe', 'zoe@mail.com', 19, 'IT'), (101, 'Bob', 'bob@mail.com', 20, 'CSE');",
        "expected": "101 Bob bob@mail.com 20 CSE\n105 Zoe zoe@mail.com 19 IT",
        "explanation": "Ordered ascending by student_id."
      }
    ]
  },
  "q60_mysql_dml_update_salary_increment": {
    "num": "60",
    "id": "q60_mysql_dml_update_salary_increment",
    "title": "MySQL Conditional Salary Increment",
    "tag": "MySQL UPDATE & SET",
    "category": "SQL & Database Queries",
    "language": "sql",
    "subtitle": "UPDATE Statement with 10% Salary Adjustment",
    "schemaSql": "CREATE TABLE Employees (\n    employee_id INT PRIMARY KEY,\n    employee_name VARCHAR(100),\n    department VARCHAR(50),\n    salary DECIMAL(10,2)\n);",
    "brief": "A company maintains an `Employees` table with employee ID, employee name, department, and salary.\n\nThe management has announced a 10% salary increment for all employees working in the `'CSE'` department.\n\nWrite a MySQL statement to update the salaries of all `'CSE'` department employees by 10%, followed by a SELECT query to display the `employee_name`, `department`, and `salary` of all employees in ascending order of `employee_id`.\n\nSchema:\n`Employees(employee_id INT, employee_name VARCHAR, department VARCHAR, salary DECIMAL)`",
    "inputFormat": "Table Employees(employee_id INT, employee_name VARCHAR(100), department VARCHAR(50), salary DECIMAL(10,2))",
    "outputFormat": "Display:\nemployee_name department salary\nin ascending order of employee_id.",
    "starterCode": "-- Update salary by 10% for employees in the 'CSE' department,\n-- then select employee_name, department, and salary (2 decimals) ordered by employee_id ASC.\n\n",
    "solutionCode": "UPDATE Employees\nSET salary = salary * 1.10\nWHERE department = 'CSE';\n\nSELECT employee_name, department, printf('%.2f', salary) AS salary\nFROM Employees\nORDER BY employee_id ASC;",
    "hints": [
      {
        "title": "UPDATE Syntax",
        "text": "Use <code>UPDATE Employees SET salary = salary * 1.10 WHERE department = 'CSE';</code>."
      },
      {
        "title": "Formatting",
        "text": "Display the results using <code>printf('%.2f', salary)</code> or <code>ROUND(salary, 2)</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "Table: Employees (4 rows, Amit & Rahul in CSE)",
        "seedSql": "INSERT INTO Employees VALUES (101, 'Amit', 'CSE', 50000), (102, 'Neha', 'ECE', 45000), (103, 'Rahul', 'CSE', 60000), (104, 'Simran', 'IT', 55000);",
        "expected": "Amit CSE 55000.00\nNeha ECE 45000.00\nRahul CSE 66000.00\nSimran IT 55000.00",
        "explanation": "CSE employees Amit (50000 -> 55000) and Rahul (60000 -> 66000) receive 10% increment."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "Table: Employees (No CSE employees)",
        "seedSql": "INSERT INTO Employees VALUES (101, 'Alice', 'IT', 10000);",
        "expected": "Alice IT 10000.00",
        "explanation": "Non-matching department salary remains unchanged."
      },
      {
        "id": 3,
        "input": "Table: Employees (Single CSE employee)",
        "seedSql": "INSERT INTO Employees VALUES (101, 'Bob', 'CSE', 10000);",
        "expected": "Bob CSE 11000.00",
        "explanation": "10000 + 10% = 11000.00."
      }
    ]
  },
  "q61_mysql_dml_delete_minimum_price": {
    "num": "61",
    "id": "q61_mysql_dml_delete_minimum_price",
    "title": "MySQL Book Records Purge Below Minimum Price",
    "tag": "MySQL DELETE & Filtering",
    "category": "SQL & Database Queries",
    "language": "sql",
    "subtitle": "DELETE Statement with WHERE price < threshold",
    "brief": "A library maintains details of its collection in a `Books` table, containing book ID, title, author, and price.\n\nThe librarian wants to remove all budget/discounted books whose price is strictly less than 300.\n\nWrite a MySQL query to delete all books with `price < 300`, followed by a SELECT query to display the remaining `book_id`, `title`, `author`, and `price` in ascending order of `book_id`.\n\nSchema:\n`Books(book_id INT, title VARCHAR, author VARCHAR, price INT)`",
    "inputFormat": "Table Books(book_id INT, title VARCHAR(100), author VARCHAR(100), price INT)",
    "outputFormat": "Display:\nbook_id title author price\nin ascending order of book_id.",
    "starterCode": "-- Delete books with price < 300, then display remaining books ordered by book_id ASC.\n\n",
    "solutionCode": "DELETE FROM Books\nWHERE price < 300;\n\nSELECT book_id, title, author, price\nFROM Books\nORDER BY book_id ASC;",
    "hints": [
      {
        "title": "DELETE Syntax",
        "text": "Use <code>DELETE FROM Books WHERE price < 300;</code>."
      },
      {
        "title": "Ordering",
        "text": "Select remaining books with <code>ORDER BY book_id ASC;</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "Table: Books (5 books, prices 550, 250, 650, 300, 200)",
        "seedSql": "INSERT INTO Books VALUES (101, 'Java', 'James', 550), (102, 'SQL', 'Korth', 250), (103, 'Python', 'Rossum', 650), (104, 'Networks', 'Tanenbaum', 300), (105, 'OS', 'Galvin', 200);",
        "expected": "101 Java James 550\n103 Python Rossum 650\n104 Networks Tanenbaum 300",
        "explanation": "Books 102 (250) and 105 (200) are < 300 and deleted. Remaining books are 101, 103, 104."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "Table: Books (All books < 300)",
        "seedSql": "INSERT INTO Books VALUES (101, 'C', 'Ritche', 100), (102, 'CPP', 'Stroustrup', 200);",
        "expected": "",
        "explanation": "All books are deleted; query returns empty set."
      },
      {
        "id": 3,
        "input": "Table: Books (Book price >= 300)",
        "seedSql": "INSERT INTO Books VALUES (501, 'Algo', 'Cormen', 800);",
        "expected": "501 Algo Cormen 800",
        "explanation": "Book price >= 300 preserved."
      }
    ],
    "schemaSql": "CREATE TABLE Books (\n    book_id INT PRIMARY KEY,\n    title VARCHAR(100),\n    author VARCHAR(100),\n    price INT\n);"
  },
  "q62_mysql_group_by_student_count": {
    "num": "62",
    "id": "q62_mysql_group_by_student_count",
    "title": "MySQL Department Student Count Aggregation",
    "tag": "MySQL GROUP BY & COUNT",
    "category": "SQL & Database Queries",
    "language": "sql",
    "subtitle": "GROUP BY department with COUNT(*) Alphabetical Order",
    "brief": "A university database stores student details in a `Students` table with student ID, student name, and department.\n\nThe academic council wants a department-wise summary of student enrollment.\n\nWrite a MySQL query to group students by their department and count how many students belong to each department. Display the results with column alias `student_count`, sorted in alphabetical order of `department`.\n\nSchema:\n`Students(student_id INT, student_name VARCHAR, department VARCHAR)`",
    "inputFormat": "Table Students(student_id INT, student_name VARCHAR(100), department VARCHAR(50))",
    "outputFormat": "Display:\ndepartment student_count\nin alphabetical order of department.",
    "starterCode": "-- Write a MySQL query to count the number of students in each department.\n-- Display department and student_count, ordered by department ASC.\n\n",
    "solutionCode": "SELECT department, COUNT(*) AS student_count\nFROM Students\nGROUP BY department\nORDER BY department ASC;",
    "hints": [
      {
        "title": "GROUP BY Clause",
        "text": "Group by department: <code>GROUP BY department</code>."
      },
      {
        "title": "Aggregation",
        "text": "Use <code>COUNT(*)</code> to count rows per group, and <code>ORDER BY department ASC</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "Table: Students (6 students in CSE, ECE, IT)",
        "seedSql": "INSERT INTO Students VALUES (101, 'Amit', 'CSE'), (102, 'Neha', 'ECE'), (103, 'Rahul', 'CSE'), (104, 'Simran', 'IT'), (105, 'Karan', 'CSE'), (106, 'Priya', 'ECE');",
        "expected": "CSE 3\nECE 2\nIT 1",
        "explanation": "CSE has 3 students, ECE has 2, IT has 1, ordered alphabetically."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "Table: Students (Single student in MECH)",
        "seedSql": "INSERT INTO Students VALUES (101, 'Alex', 'MECH');",
        "expected": "MECH 1",
        "explanation": "Single department with 1 student."
      },
      {
        "id": 3,
        "input": "Table: Students (All students in CSE)",
        "seedSql": "INSERT INTO Students VALUES (1, 'A', 'CSE'), (2, 'B', 'CSE'), (3, 'C', 'CSE');",
        "expected": "CSE 3",
        "explanation": "All students belong to CSE."
      }
    ],
    "schemaSql": "CREATE TABLE Students (\n    student_id INT PRIMARY KEY,\n    student_name VARCHAR(100),\n    department VARCHAR(50)\n);"
  },
  "q63_mysql_group_by_customer_order_sum": {
    "num": "63",
    "id": "q63_mysql_group_by_customer_order_sum",
    "title": "MySQL Customer Total Order Expenditure",
    "tag": "MySQL GROUP BY & SUM",
    "category": "SQL & Database Queries",
    "language": "sql",
    "subtitle": "GROUP BY customer_id with SUM(amount)",
    "brief": "An e-commerce platform stores customer purchase records in an `Orders` table with order ID, customer ID, and order amount.\n\nThe sales analytics team wants to calculate the total expenditure across all orders placed by each customer.\n\nWrite a MySQL query that groups records by `customer_id` and computes the sum of `amount` as `total_amount`. Order the results by `customer_id` in ascending order.\n\nSchema:\n`Orders(order_id INT, customer_id INT, amount INT)`",
    "inputFormat": "Table Orders(order_id INT, customer_id INT, amount INT)",
    "outputFormat": "Display:\ncustomer_id total_amount\nin ascending order of customer_id.",
    "starterCode": "-- Write a MySQL query to calculate the total amount spent by each customer.\n-- Display customer_id and total_amount, ordered by customer_id ASC.\n\n",
    "solutionCode": "SELECT customer_id, SUM(amount) AS total_amount\nFROM Orders\nGROUP BY customer_id\nORDER BY customer_id ASC;",
    "hints": [
      {
        "title": "SUM Aggregate",
        "text": "Use <code>SUM(amount)</code> grouped by <code>customer_id</code>."
      },
      {
        "title": "Sorting",
        "text": "Sort the aggregated output by <code>customer_id ASC</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "Table: Orders (5 orders from customers 101, 102, 103)",
        "seedSql": "INSERT INTO Orders VALUES (1, 101, 1200), (2, 102, 800), (3, 101, 1500), (4, 103, 2000), (5, 102, 700);",
        "expected": "101 2700\n102 1500\n103 2000",
        "explanation": "101 spent 1200+1500=2700, 102 spent 800+700=1500, 103 spent 2000."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "Table: Orders (Single order)",
        "seedSql": "INSERT INTO Orders VALUES (1, 50, 999);",
        "expected": "50 999",
        "explanation": "Single order calculation."
      },
      {
        "id": 3,
        "input": "Table: Orders (Multiple identical orders)",
        "seedSql": "INSERT INTO Orders VALUES (1, 10, 500), (2, 10, 500), (3, 10, 500);",
        "expected": "10 1500",
        "explanation": "Three orders of 500 sum up to 1500."
      }
    ],
    "schemaSql": "CREATE TABLE Orders (\n    order_id INT PRIMARY KEY,\n    customer_id INT,\n    amount INT\n);"
  },
  "q64_mysql_group_by_subject_avg": {
    "num": "64",
    "id": "q64_mysql_group_by_subject_avg",
    "title": "MySQL Subject Average Examination Marks",
    "tag": "MySQL GROUP BY & AVG",
    "category": "SQL & Database Queries",
    "language": "sql",
    "subtitle": "GROUP BY subject with AVG(marks) Rounded to 2 Decimals",
    "brief": "A university examination division maintains student test scores in an `ExamMarks` table containing student ID, subject name, and marks obtained.\n\nThe board requires an academic report showing the average marks scored in each subject.\n\nWrite a MySQL query to calculate the average marks for each subject. Display the `subject` and `average_marks` rounded to two decimal places, ordered in alphabetical order of `subject`.\n\nSchema:\n`ExamMarks(student_id INT, subject VARCHAR, marks INT)`",
    "inputFormat": "Table ExamMarks(student_id INT, subject VARCHAR(50), marks INT)",
    "outputFormat": "Display:\nsubject average_marks\nrounded to two decimal places, ordered by subject ASC.",
    "starterCode": "-- Write a MySQL query to calculate the average score per subject.\n-- Display subject and average_marks (2 decimal places), ordered by subject ASC.\n\n",
    "solutionCode": "SELECT subject, printf('%.2f', ROUND(AVG(marks), 2)) AS average_marks\nFROM ExamMarks\nGROUP BY subject\nORDER BY subject ASC;",
    "hints": [
      {
        "title": "AVG & ROUND",
        "text": "Use <code>AVG(marks)</code> with <code>ROUND(..., 2)</code> or <code>printf('%.2f', ...)</code>."
      },
      {
        "title": "Ordering",
        "text": "Sort alphabetically using <code>ORDER BY subject ASC</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "Table: ExamMarks (6 records in Java and DBMS)",
        "seedSql": "INSERT INTO ExamMarks VALUES (101, 'Java', 80), (102, 'Java', 90), (103, 'DBMS', 70), (104, 'DBMS', 80), (105, 'Java', 100), (106, 'DBMS', 90);",
        "expected": "DBMS 80.00\nJava 90.00",
        "explanation": "DBMS average = (70+80+90)/3 = 80.00. Java average = (80+90+100)/3 = 90.00."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "Table: ExamMarks (Single exam)",
        "seedSql": "INSERT INTO ExamMarks VALUES (1, 'Math', 95);",
        "expected": "Math 95.00",
        "explanation": "Single test score average."
      },
      {
        "id": 3,
        "input": "Table: ExamMarks (Non-integer average)",
        "seedSql": "INSERT INTO ExamMarks VALUES (1, 'Physics', 85), (2, 'Physics', 86);",
        "expected": "Physics 85.50",
        "explanation": "Average (85+86)/2 = 85.50."
      }
    ],
    "schemaSql": "CREATE TABLE ExamMarks (\n    student_id INT,\n    subject VARCHAR(50),\n    marks INT\n);"
  },
  "q65_mysql_group_by_having_frequent_shoppers": {
    "num": "65",
    "id": "q65_mysql_group_by_having_frequent_shoppers",
    "title": "MySQL Frequent Shoppers Filter with HAVING",
    "tag": "MySQL HAVING Clause",
    "category": "SQL & Database Queries",
    "language": "sql",
    "subtitle": "GROUP BY customer_id HAVING COUNT(*) >= 3",
    "brief": "An online retail store tracks orders in an `Orders` table with order ID, customer ID, and amount.\n\nTo identify VIP customers for a loyalty program, management wants to list customers who have placed at least 3 orders.\n\nWrite a MySQL query to group orders by `customer_id` and filter groups using the `HAVING` clause to display only customers with 3 or more orders. Display `customer_id` and `order_count`, ordered by `customer_id` in ascending order.\n\nSchema:\n`Orders(order_id INT, customer_id INT, amount INT)`",
    "inputFormat": "Table Orders(order_id INT, customer_id INT, amount INT)",
    "outputFormat": "Display:\ncustomer_id order_count\nfor customers having at least three orders, ordered by customer_id ASC.",
    "starterCode": "-- Write a MySQL query using GROUP BY and HAVING to find frequent shoppers.\n-- Display customer_id and order_count for customers with >= 3 orders.\n\n",
    "solutionCode": "SELECT customer_id, COUNT(*) AS order_count\nFROM Orders\nGROUP BY customer_id\nHAVING COUNT(*) >= 3\nORDER BY customer_id ASC;",
    "hints": [
      {
        "title": "HAVING vs WHERE",
        "text": "Filter aggregate counts after grouping using <code>HAVING COUNT(*) >= 3</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "Table: Orders (7 orders: customer 101 has 4, 102 has 2, 103 has 1)",
        "seedSql": "INSERT INTO Orders VALUES (1, 101, 500), (2, 102, 700), (3, 101, 400), (4, 103, 900), (5, 101, 600), (6, 102, 300), (7, 101, 800);",
        "expected": "101 4",
        "explanation": "Customer 101 placed 4 orders (>= 3). Customers 102 (2) and 103 (1) do not qualify."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "Table: Orders (Multiple qualifying customers)",
        "seedSql": "INSERT INTO Orders VALUES (1, 10, 100), (2, 10, 200), (3, 10, 300), (4, 20, 100), (5, 20, 200), (6, 20, 300);",
        "expected": "10 3\n20 3",
        "explanation": "Both customers 10 and 20 placed exactly 3 orders."
      },
      {
        "id": 3,
        "input": "Table: Orders (No qualifying customers)",
        "seedSql": "INSERT INTO Orders VALUES (1, 1, 100), (2, 1, 200);",
        "expected": "",
        "explanation": "No customer reached 3 orders; returns empty set."
      }
    ],
    "schemaSql": "CREATE TABLE Orders (\n    order_id INT PRIMARY KEY,\n    customer_id INT,\n    amount INT\n);"
  },
  "q66_mysql_subquery_salary_above_average": {
    "num": "66",
    "id": "q66_mysql_subquery_salary_above_average",
    "title": "MySQL Subquery Above Average Salary Employees",
    "tag": "MySQL Nested Subqueries",
    "category": "SQL & Database Queries",
    "language": "sql",
    "subtitle": "Nested Subquery WHERE salary > (SELECT AVG(salary))",
    "brief": "A company maintains an `Employees` table with employee ID, employee name, and salary.\n\nThe HR department needs a list of all employees whose individual salary is strictly greater than the company-wide average salary.\n\nWrite a MySQL query using a nested subquery to find these employees. Display `employee_name` and `salary`, ordered by `salary` in descending order.\n\nSchema:\n`Employees(employee_id INT, employee_name VARCHAR, salary INT)`",
    "inputFormat": "Table Employees(employee_id INT, employee_name VARCHAR(100), salary INT)",
    "outputFormat": "Display:\nemployee_name salary\nin descending order of salary.",
    "starterCode": "-- Write a MySQL query using a subquery to find employees earning above average.\n-- Display employee_name and salary, ordered by salary DESC.\n\n",
    "solutionCode": "SELECT employee_name, salary\nFROM Employees\nWHERE salary > (SELECT AVG(salary) FROM Employees)\nORDER BY salary DESC;",
    "hints": [
      {
        "title": "Nested Subquery",
        "text": "In the WHERE clause: <code>WHERE salary > (SELECT AVG(salary) FROM Employees)</code>."
      },
      {
        "title": "Sorting",
        "text": "Use <code>ORDER BY salary DESC</code> to list highest salaries first."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "Table: Employees (5 employees, salaries 40k, 60k, 50k, 80k, 30k; avg = 52k)",
        "seedSql": "INSERT INTO Employees VALUES (101, 'Amit', 40000), (102, 'Neha', 60000), (103, 'Rahul', 50000), (104, 'Simran', 80000), (105, 'Karan', 30000);",
        "expected": "Simran 80000\nNeha 60000",
        "explanation": "Average salary is 52000. Simran (80000) and Neha (60000) exceed average, ordered descending."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "Table: Employees (2 employees, 100k and 50k; avg = 75k)",
        "seedSql": "INSERT INTO Employees VALUES (1, 'Alice', 100000), (2, 'Bob', 50000);",
        "expected": "Alice 100000",
        "explanation": "Alice (100000) > average (75000)."
      },
      {
        "id": 3,
        "input": "Table: Employees (Identical salaries, none strictly greater)",
        "seedSql": "INSERT INTO Employees VALUES (1, 'X', 50000), (2, 'Y', 50000);",
        "expected": "",
        "explanation": "All equal average; returns empty set."
      }
    ],
    "schemaSql": "CREATE TABLE Employees (\n    employee_id INT PRIMARY KEY,\n    employee_name VARCHAR(100),\n    salary INT\n);"
  },
  "q67_mysql_inner_join_students_departments": {
    "num": "67",
    "id": "q67_mysql_inner_join_students_departments",
    "title": "MySQL Inner Join Students and Departments",
    "tag": "MySQL Relational INNER JOIN",
    "category": "SQL & Database Queries",
    "language": "sql",
    "subtitle": "Relational INNER JOIN on department_id",
    "brief": "A university database normalizes student and department data across two tables:\n1. `Students(student_id INT, student_name VARCHAR, department_id INT)`\n2. `Departments(department_id INT, department_name VARCHAR)`\n\nWrite a MySQL query using an `INNER JOIN` on `department_id` to display each student's name alongside their department name. Order the results by `student_id` in ascending order.\n\nSchema:\n• `Students(student_id INT, student_name VARCHAR, department_id INT)`\n• `Departments(department_id INT, department_name VARCHAR)`",
    "inputFormat": "Tables:\nStudents(student_id INT, student_name VARCHAR(100), department_id INT)\nDepartments(department_id INT, department_name VARCHAR(100))",
    "outputFormat": "Display:\nstudent_name department_name\nin ascending order of student_id.",
    "starterCode": "-- Write a MySQL query using an INNER JOIN between Students and Departments.\n-- Display student_name and department_name, ordered by student_id ASC.\n\n",
    "solutionCode": "SELECT s.student_name, d.department_name\nFROM Students s\nINNER JOIN Departments d ON s.department_id = d.department_id\nORDER BY s.student_id ASC;",
    "hints": [
      {
        "title": "INNER JOIN Syntax",
        "text": "Join matching records: <code>FROM Students s INNER JOIN Departments d ON s.department_id = d.department_id</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "Students: (101 Amit 10, 102 Neha 20, 103 Rahul 10)\nDepartments: (10 CSE, 20 ECE)",
        "seedSql": "INSERT INTO Students VALUES (101, 'Amit', 10), (102, 'Neha', 20), (103, 'Rahul', 10); INSERT INTO Departments VALUES (10, 'CSE'), (20, 'ECE');",
        "expected": "Amit CSE\nNeha ECE\nRahul CSE",
        "explanation": "101 Amit and 103 Rahul join to 10 CSE; 102 Neha joins to 20 ECE."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "Single match in IT",
        "seedSql": "INSERT INTO Students VALUES (1, 'Alice', 1); INSERT INTO Departments VALUES (1, 'IT');",
        "expected": "Alice IT",
        "explanation": "Single row joined."
      },
      {
        "id": 3,
        "input": "Unmatched foreign key (department_id 99 not in Departments)",
        "seedSql": "INSERT INTO Students VALUES (1, 'Bob', 99); INSERT INTO Departments VALUES (1, 'CSE');",
        "expected": "",
        "explanation": "INNER JOIN omits records without matching department_id."
      }
    ],
    "schemaSql": "CREATE TABLE Students (\n    student_id INT PRIMARY KEY,\n    student_name VARCHAR(100),\n    department_id INT\n);\nCREATE TABLE Departments (\n    department_id INT PRIMARY KEY,\n    department_name VARCHAR(100)\n);"
  },
  "q68_mysql_left_join_employees_departments": {
    "num": "68",
    "id": "q68_mysql_left_join_employees_departments",
    "title": "MySQL Left Join Employees and Departments",
    "tag": "MySQL Relational LEFT JOIN",
    "category": "SQL & Database Queries",
    "language": "sql",
    "subtitle": "LEFT JOIN Preserving Unassigned Employees with NULL",
    "brief": "A corporate enterprise stores staffing data across two tables:\n1. `Employees(employee_id INT, employee_name VARCHAR, department_id INT)`\n2. `Departments(department_id INT, department_name VARCHAR)`\n\nManagement wants a full roster containing every employee, including newly onboarded personnel who have not yet been allocated to any department.\n\nWrite a MySQL query using a `LEFT JOIN` on `department_id` to display `employee_name` and `department_name`. If an employee has no department assigned, display `'NULL'` as the department name. Order the results by `employee_id` in ascending order.\n\nSchema:\n• `Employees(employee_id INT, employee_name VARCHAR, department_id INT)`\n• `Departments(department_id INT, department_name VARCHAR)`",
    "inputFormat": "Tables:\nEmployees(employee_id INT, employee_name VARCHAR(100), department_id INT)\nDepartments(department_id INT, department_name VARCHAR(100))",
    "outputFormat": "Display:\nemployee_name department_name\nin ascending order of employee_id.",
    "starterCode": "-- Write a MySQL query using a LEFT JOIN to preserve all employees.\n-- Display employee_name and department_name (or NULL), ordered by employee_id ASC.\n\n",
    "solutionCode": "SELECT e.employee_name, IFNULL(d.department_name, 'NULL') AS department_name\nFROM Employees e\nLEFT JOIN Departments d ON e.department_id = d.department_id\nORDER BY e.employee_id ASC;",
    "hints": [
      {
        "title": "LEFT JOIN Logic",
        "text": "Use <code>FROM Employees e LEFT JOIN Departments d ON e.department_id = d.department_id</code> to keep all employee rows."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "Employees: (101 Amit 10, 102 Neha NULL, 103 Rahul 20)\nDepartments: (10 CSE, 20 ECE)",
        "seedSql": "INSERT INTO Employees VALUES (101, 'Amit', 10), (102, 'Neha', NULL), (103, 'Rahul', 20); INSERT INTO Departments VALUES (10, 'CSE'), (20, 'ECE');",
        "expected": "Amit CSE\nNeha NULL\nRahul ECE",
        "explanation": "Neha has no department, outputting NULL."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "Single employee without department",
        "seedSql": "INSERT INTO Employees VALUES (101, 'Solo', NULL); INSERT INTO Departments VALUES (10, 'CSE');",
        "expected": "Solo NULL",
        "explanation": "Preserves employee with NULL department."
      },
      {
        "id": 3,
        "input": "All employees matched",
        "seedSql": "INSERT INTO Employees VALUES (101, 'Alice', 10); INSERT INTO Departments VALUES (10, 'Finance');",
        "expected": "Alice Finance",
        "explanation": "Matches assigned department."
      }
    ],
    "schemaSql": "CREATE TABLE Employees (\n    employee_id INT PRIMARY KEY,\n    employee_name VARCHAR(100),\n    department_id INT\n);\nCREATE TABLE Departments (\n    department_id INT PRIMARY KEY,\n    department_name VARCHAR(100)\n);"
  },
  "q69_mysql_self_join_employees_managers": {
    "num": "69",
    "id": "q69_mysql_self_join_employees_managers",
    "title": "MySQL Self Join Employees and Managers",
    "tag": "MySQL Hierarchical SELF JOIN",
    "category": "SQL & Database Queries",
    "language": "sql",
    "subtitle": "Hierarchical Self Join on manager_id = employee_id",
    "brief": "An organizational directory maintains all staff in a single recursive `Employees` table with employee ID, employee name, and the employee ID of their reporting manager (`manager_id`).\n\nWrite a MySQL query using a `SELF JOIN` (joining `Employees` with itself) to display each employee's name alongside the name of their manager. Top-level executives (such as the CEO) who do not have a manager should display `'NULL'` as their manager name. Order the results by `employee_id` in ascending order.\n\nSchema:\n`Employees(employee_id INT, employee_name VARCHAR, manager_id INT)`",
    "inputFormat": "Table Employees(employee_id INT, employee_name VARCHAR(100), manager_id INT)",
    "outputFormat": "Display:\nemployee_name manager_name\nin ascending order of employee ID.",
    "starterCode": "-- Write a MySQL query using a SELF JOIN to find each employee's manager name.\n-- Display employee_name and manager_name (or NULL), ordered by employee_id ASC.\n\n",
    "solutionCode": "SELECT e.employee_name, IFNULL(m.employee_name, 'NULL') AS manager_name\nFROM Employees e\nLEFT JOIN Employees m ON e.manager_id = m.employee_id\nORDER BY e.employee_id ASC;",
    "hints": [
      {
        "title": "Self Join Syntax",
        "text": "Join the table to itself with two aliases: <code>FROM Employees e LEFT JOIN Employees m ON e.manager_id = m.employee_id</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "Employees: (101 Amit NULL, 102 Neha 101, 103 Rahul 101, 104 Simran 102)",
        "seedSql": "INSERT INTO Employees VALUES (101, 'Amit', NULL), (102, 'Neha', 101), (103, 'Rahul', 101), (104, 'Simran', 102);",
        "expected": "Amit NULL\nNeha Amit\nRahul Amit\nSimran Neha",
        "explanation": "Amit has no manager (NULL); Neha and Rahul report to Amit; Simran reports to Neha."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "Single employee without manager (CEO)",
        "seedSql": "INSERT INTO Employees VALUES (1, 'CEO', NULL);",
        "expected": "CEO NULL",
        "explanation": "Single top-level executive."
      },
      {
        "id": 3,
        "input": "Two-tier hierarchy",
        "seedSql": "INSERT INTO Employees VALUES (1, 'Boss', NULL), (2, 'Dev', 1);",
        "expected": "Boss NULL\nDev Boss",
        "explanation": "Dev reports to Boss."
      }
    ],
    "schemaSql": "CREATE TABLE Employees (\n    employee_id INT PRIMARY KEY,\n    employee_name VARCHAR(100),\n    manager_id INT\n);"
  },
  "q70_mysql_subquery_max_price_products": {
    "num": "70",
    "id": "q70_mysql_subquery_max_price_products",
    "title": "MySQL Subquery Maximum Price Products",
    "tag": "MySQL Subquery with MAX()",
    "category": "SQL & Database Queries",
    "language": "sql",
    "subtitle": "Finding Products with MAX(price) via Subquery",
    "brief": "An inventory catalog stores merchandise in a `Products` table containing product ID, product name, and retail price.\n\nThe marketing department wants to feature the most expensive flagship product(s) in a promotional campaign.\n\nWrite a MySQL query using a subquery to retrieve all products whose price equals the maximum price in the table. If multiple products share the highest price, all of them must be displayed. Order the results by `product_id` in ascending order.\n\nSchema:\n`Products(product_id INT, product_name VARCHAR, price INT)`",
    "inputFormat": "Table Products(product_id INT, product_name VARCHAR(100), price INT)",
    "outputFormat": "Display:\nproduct_name price\nfor all products with the maximum price, ordered by product_id ASC.",
    "starterCode": "-- Write a MySQL query using a subquery to find product(s) with the maximum price.\n-- Display product_name and price, ordered by product_id ASC.\n\n",
    "solutionCode": "SELECT product_name, price\nFROM Products\nWHERE price = (SELECT MAX(price) FROM Products)\nORDER BY product_id ASC;",
    "hints": [
      {
        "title": "Subquery with MAX",
        "text": "In the WHERE clause: <code>WHERE price = (SELECT MAX(price) FROM Products)</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "Products: (101 Laptop 60k, 102 Phone 40k, 103 Monitor 15k, 104 Tablet 30k, 105 Camera 60k)",
        "seedSql": "INSERT INTO Products VALUES (101, 'Laptop', 60000), (102, 'Phone', 40000), (103, 'Monitor', 15000), (104, 'Tablet', 30000), (105, 'Camera', 60000);",
        "expected": "Laptop 60000\nCamera 60000",
        "explanation": "Maximum price is 60000, tied between Laptop and Camera."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "Single product in inventory",
        "seedSql": "INSERT INTO Products VALUES (101, 'Pen', 10);",
        "expected": "Pen 10",
        "explanation": "Single product is maximum."
      },
      {
        "id": 3,
        "input": "All products tied for same price",
        "seedSql": "INSERT INTO Products VALUES (1, 'ItemA', 100), (2, 'ItemB', 200), (3, 'ItemC', 200);",
        "expected": "ItemB 200\nItemC 200",
        "explanation": "Both ItemB and ItemC share the maximum price of 200."
      }
    ],
    "schemaSql": "CREATE TABLE Products (\n    product_id INT PRIMARY KEY,\n    product_name VARCHAR(100),\n    price INT\n);"
  },
  "q71_ete_filter_sort_employees_streams": {
    "num": "71",
    "id": "q71_ete_filter_sort_employees_streams",
    "title": "Filter and Sort Employees Using Streams",
    "tag": "Streams & Filtering",
    "category": "Sample ETE",
    "language": "java",
    "subtitle": "Filtering >= minimumSalary, Descending Salary & Alphabetical Name Sort",
    "brief": "A company maintains a list of employees. Each employee has a name, department, and salary.\nYou are given the employee details and a minimum salary. Your task is to find all employees whose salary is greater than or equal to the given minimum salary.\n\nThe selected employees must be:\n1. Filtered using the Java Stream API.\n2. Sorted by salary in descending order.\n3. If two employees have the same salary, they should be sorted by name in alphabetical order.\n4. Display the employee name, department, and salary.\n\nIf no employee satisfies the condition, print `No employees found`.\n\nFunction Signature:\n`public static List<Employee> getEmployees(List<Employee> employees, int minimumSalary)`",
    "inputFormat": "First line: integer n representing the number of employees.\nNext n lines: employee name, department, and salary.\nLast line: integer minimumSalary.",
    "outputFormat": "name department salary for each qualifying employee, or 'No employees found'.",
    "starterCode": "import java.util.*;\nimport java.util.stream.Collectors;\n\nclass Employee {\n    String name;\n    String department;\n    int salary;\n\n    Employee(String name, String department, int salary) {\n        this.name = name;\n        this.department = department;\n        this.salary = salary;\n    }\n}\n\npublic class Main {\n    public static List<Employee> getEmployees(List<Employee> employees, int minimumSalary) {\n        // Write your logic using Java Stream API below\n        return null;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        List<Employee> employees = new ArrayList<>();\n        for (int i = 0; i < n; i++) {\n            String name = sc.next();\n            String department = sc.next();\n            int salary = sc.nextInt();\n            employees.add(new Employee(name, department, salary));\n        }\n        int minimumSalary = sc.nextInt();\n        List<Employee> result = getEmployees(employees, minimumSalary);\n        if (result.isEmpty()) {\n            System.out.println(\"No employees found\");\n        } else {\n            for (Employee e : result) {\n                System.out.println(e.name + \" \" + e.department + \" \" + e.salary);\n            }\n        }\n        sc.close();\n    }\n}",
    "solutionCode": "import java.util.*;\nimport java.util.stream.Collectors;\n\nclass Employee {\n    String name;\n    String department;\n    int salary;\n\n    Employee(String name, String department, int salary) {\n        this.name = name;\n        this.department = department;\n        this.salary = salary;\n    }\n}\n\npublic class Main {\n    public static List<Employee> getEmployees(List<Employee> employees, int minimumSalary) {\n        return employees.stream()\n            .filter(e -> e.salary >= minimumSalary)\n            .sorted(Comparator.comparingInt((Employee e) -> e.salary).reversed()\n                .thenComparing(e -> e.name))\n            .collect(Collectors.toList());\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        List<Employee> employees = new ArrayList<>();\n        for (int i = 0; i < n; i++) {\n            String name = sc.next();\n            String department = sc.next();\n            int salary = sc.nextInt();\n            employees.add(new Employee(name, department, salary));\n        }\n        int minimumSalary = sc.nextInt();\n        List<Employee> result = getEmployees(employees, minimumSalary);\n        if (result.isEmpty()) {\n            System.out.println(\"No employees found\");\n        } else {\n            for (Employee e : result) {\n                System.out.println(e.name + \" \" + e.department + \" \" + e.salary);\n            }\n        }\n        sc.close();\n    }\n}",
    "hints": [
      {
        "title": "Filter by Minimum Salary",
        "text": "Use <code>.filter(e -> e.salary >= minimumSalary)</code> in the stream pipeline."
      },
      {
        "title": "Multi-level Comparator",
        "text": "Use <code>Comparator.comparingInt((Employee e) -> e.salary).reversed().thenComparing(e -> e.name)</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "5\nRahul IT 70000\nAmit HR 50000\nNeha IT 90000\nRaj Sales 60000\nKaran IT 90000\n60000",
        "expected": "Karan IT 90000\nNeha IT 90000\nRahul IT 70000\nRaj Sales 60000",
        "explanation": "Karan and Neha tie at 90000, Karan appears first alphabetically. Amit (50000) is filtered out."
      },
      {
        "id": 2,
        "input": "4\nA IT 40000\nB HR 45000\nC IT 55000\nD Sales 30000\n50000",
        "expected": "C IT 55000",
        "explanation": "Only C satisfies salary >= 50000."
      },
      {
        "id": 3,
        "input": "3\nRahul IT 70000\nAmit HR 70000\nNeha IT 50000\n70000",
        "expected": "Amit HR 70000\nRahul IT 70000",
        "explanation": "Amit and Rahul tie at 70000; Amit comes first alphabetically."
      }
    ],
    "edgeCases": [
      {
        "id": 4,
        "input": "3\nAmit HR 30000\nRahul IT 40000\nSimran Sales 45000\n50000",
        "expected": "No employees found",
        "explanation": "No employee earns >= 50000."
      },
      {
        "id": 5,
        "input": "3\nZara Dev 80000\nAbby Dev 80000\nMike Dev 80000\n80000",
        "expected": "Abby Dev 80000\nMike Dev 80000\nZara Dev 80000",
        "explanation": "All employees have the same salary, sorted strictly alphabetically."
      }
    ]
  },
  "q72_ete_most_frequent_product_streams": {
    "num": "72",
    "id": "q72_ete_most_frequent_product_streams",
    "title": "Find the Most Frequent Element Using Streams",
    "tag": "Streams & Collectors",
    "category": "Sample ETE",
    "language": "java",
    "subtitle": "Finding Mode Element with Tie-Breaking via Collectors.groupingBy",
    "brief": "You are given a list of integers representing product IDs purchased by customers.\nYour task is to find the product ID that appears most frequently in the list. If multiple product IDs have the same highest frequency, return the smallest product ID. You should use the Java Stream API and Collectors to solve the problem.\n\nFunction Signature:\n`public static int mostFrequentProduct(List<Integer> products)`",
    "inputFormat": "First line: integer n representing the total number of products.\nSecond line: n space-separated integers representing product IDs.",
    "outputFormat": "Single integer representing the most frequent product ID (smallest on frequency tie).",
    "starterCode": "import java.util.*;\nimport java.util.function.Function;\nimport java.util.stream.Collectors;\n\npublic class Main {\n    public static int mostFrequentProduct(List<Integer> products) {\n        // Write your logic using Java Stream API and Collectors below\n        return -1;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        List<Integer> products = new ArrayList<>();\n        for (int i = 0; i < n; i++) {\n            products.add(sc.nextInt());\n        }\n        System.out.println(mostFrequentProduct(products));\n        sc.close();\n    }\n}",
    "solutionCode": "import java.util.*;\nimport java.util.function.Function;\nimport java.util.stream.Collectors;\n\npublic class Main {\n    public static int mostFrequentProduct(List<Integer> products) {\n        Map<Integer, Long> freq = products.stream()\n            .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));\n        \n        long maxCount = Collections.max(freq.values());\n        \n        return freq.entrySet().stream()\n            .filter(entry -> entry.getValue() == maxCount)\n            .map(Map.Entry::getKey)\n            .min(Integer::compareTo)\n            .orElse(-1);\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        List<Integer> products = new ArrayList<>();\n        for (int i = 0; i < n; i++) {\n            products.add(sc.nextInt());\n        }\n        System.out.println(mostFrequentProduct(products));\n        sc.close();\n    }\n}",
    "hints": [
      {
        "title": "Frequency Map with Streams",
        "text": "Count occurrences using <code>products.stream().collect(Collectors.groupingBy(Function.identity(), Collectors.counting()))</code>."
      },
      {
        "title": "Finding the Smallest Key with Max Count",
        "text": "Find <code>maxCount = Collections.max(freq.values())</code>, then filter keys having <code>entry.getValue() == maxCount</code> and find <code>min(Integer::compareTo)</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "8\n10 20 10 30 20 10 40 20",
        "expected": "10",
        "explanation": "10 appears 3 times and 20 appears 3 times. Smallest product ID between 10 and 20 is 10."
      },
      {
        "id": 2,
        "input": "6\n5 3 5 3 7 7",
        "expected": "3",
        "explanation": "5, 3, and 7 each appear 2 times. Smallest ID is 3."
      },
      {
        "id": 3,
        "input": "5\n1 2 3 4 5",
        "expected": "1",
        "explanation": "All products have frequency 1. The smallest ID is 1."
      }
    ],
    "edgeCases": [
      {
        "id": 4,
        "input": "1\n42",
        "expected": "42",
        "explanation": "Single element list returns that element."
      },
      {
        "id": 5,
        "input": "6\n100 50 100 50 25 25",
        "expected": "25",
        "explanation": "100, 50, and 25 all appear 2 times. 25 is smallest."
      }
    ]
  },
  "q73_ete_employee_salary_statistics": {
    "num": "73",
    "id": "q73_ete_employee_salary_statistics",
    "title": "Employee Salary Statistics",
    "tag": "Stream Summary Statistics",
    "category": "Sample ETE",
    "language": "java",
    "subtitle": "Average (2 Decimals), Highest, and Lowest Salary via Stream API",
    "brief": "A company wants to analyze employee salaries. You are given a list of employees. Each employee has name and salary.\n\nCalculate and print using the Java Stream API:\n1. The average salary of all employees (formatted with exactly two decimal places).\n2. The highest salary.\n3. The lowest salary.\n\nOutput format:\n`Average: <avg> Highest: <max> Lowest: <min>`\n\nFunction Signature:\n`public static void calculateStatistics(List<Employee> employees)`",
    "inputFormat": "First line: integer n representing number of employees.\nNext n lines: employee name and salary.",
    "outputFormat": "Average: <average> Highest: <highest> Lowest: <lowest>",
    "starterCode": "import java.util.*;\n\nclass Employee {\n    String name;\n    int salary;\n\n    Employee(String name, int salary) {\n        this.name = name;\n        this.salary = salary;\n    }\n}\n\npublic class Main {\n    public static void calculateStatistics(List<Employee> employees) {\n        // Write your logic using Java Stream API below\n        // Expected format: Average: %.2f Highest: %d Lowest: %d\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        List<Employee> employees = new ArrayList<>();\n        for (int i = 0; i < n; i++) {\n            String name = sc.next();\n            int salary = sc.nextInt();\n            employees.add(new Employee(name, salary));\n        }\n        calculateStatistics(employees);\n        sc.close();\n    }\n}",
    "solutionCode": "import java.util.*;\n\nclass Employee {\n    String name;\n    int salary;\n\n    Employee(String name, int salary) {\n        this.name = name;\n        this.salary = salary;\n    }\n}\n\npublic class Main {\n    public static void calculateStatistics(List<Employee> employees) {\n        IntSummaryStatistics stats = employees.stream()\n            .mapToInt(e -> e.salary)\n            .summaryStatistics();\n\n        System.out.printf(java.util.Locale.US, \"Average: %.2f Highest: %d Lowest: %d%n\",\n            stats.getAverage(), stats.getMax(), stats.getMin());\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        List<Employee> employees = new ArrayList<>();\n        for (int i = 0; i < n; i++) {\n            String name = sc.next();\n            int salary = sc.nextInt();\n            employees.add(new Employee(name, salary));\n        }\n        calculateStatistics(employees);\n        sc.close();\n    }\n}",
    "hints": [
      {
        "title": "IntSummaryStatistics",
        "text": "Use <code>employees.stream().mapToInt(e -> e.salary).summaryStatistics()</code> to compute average, max, and min in a single pass."
      },
      {
        "title": "Decimal Formatting",
        "text": "Use <code>System.out.printf(Locale.US, \"Average: %.2f Highest: %d Lowest: %d%n\", stats.getAverage(), stats.getMax(), stats.getMin());</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "5\nRahul 50000\nAmit 60000\nNeha 70000\nRaj 80000\nKaran 90000",
        "expected": "Average: 70000.00 Highest: 90000 Lowest: 50000",
        "explanation": "Sum = 350000, Count = 5, Average = 70000.00, Max = 90000, Min = 50000."
      },
      {
        "id": 2,
        "input": "3\nA 10000\nB 20000\nC 30000",
        "expected": "Average: 20000.00 Highest: 30000 Lowest: 10000",
        "explanation": "Average = 60000/3 = 20000.00."
      },
      {
        "id": 3,
        "input": "4\nA 55000\nB 55000\nC 65000\nD 75000",
        "expected": "Average: 62500.00 Highest: 75000 Lowest: 55000",
        "explanation": "Average = 250000/4 = 62500.00."
      }
    ],
    "edgeCases": [
      {
        "id": 4,
        "input": "1\nSolo 45000",
        "expected": "Average: 45000.00 Highest: 45000 Lowest: 45000",
        "explanation": "Single employee has average = max = min = 45000."
      },
      {
        "id": 5,
        "input": "3\nA 10000\nB 10000\nC 10001",
        "expected": "Average: 10000.33 Highest: 10001 Lowest: 10000",
        "explanation": "30001 / 3 = 10000.333... rounded to 2 decimal places."
      }
    ]
  },
  "q74_ete_find_employees_optional_streams": {
    "num": "74",
    "id": "q74_ete_find_employees_optional_streams",
    "title": "Find Employees Using Optional and Streams",
    "tag": "Optional & Streams",
    "category": "Sample ETE",
    "language": "java",
    "subtitle": "Handling Nullable Values with Optional and Multi-Level Sorting",
    "brief": "A company maintains employee records. Some employees may not have a salary assigned yet (represented by -1 in input and stored as `Optional.ofNullable(...)`).\n\nYour task is to:\n1. Ignore employees whose salary is not available (empty Optional).\n2. Find employees whose salary is greater than or equal to a given minimum salary.\n3. Sort the employees by salary in descending order.\n4. If two employees have the same salary, sort them by name alphabetically.\n5. Display the employee name and salary.\n\nYou must use Java Optional and Stream API. If no employee matches, print `No employees found`.\n\nFunction Signature:\n`public static List<Employee> findEmployees(List<Employee> employees, int minimumSalary)`",
    "inputFormat": "First line: integer n.\nNext n lines: employee name and salary (-1 if missing).\nLast line: integer minimumSalary.",
    "outputFormat": "name salary for each qualifying employee, or 'No employees found'.",
    "starterCode": "import java.util.*;\nimport java.util.stream.Collectors;\n\nclass Employee {\n    String name;\n    Optional<Integer> salary;\n\n    Employee(String name, Integer salary) {\n        this.name = name;\n        this.salary = Optional.ofNullable(salary);\n    }\n}\n\npublic class Main {\n    public static List<Employee> findEmployees(List<Employee> employees, int minimumSalary) {\n        // Write your logic using Java Optional and Stream API below\n        return null;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        List<Employee> employees = new ArrayList<>();\n        for (int i = 0; i < n; i++) {\n            String name = sc.next();\n            int salary = sc.nextInt();\n            if (salary == -1) {\n                employees.add(new Employee(name, null));\n            } else {\n                employees.add(new Employee(name, salary));\n            }\n        }\n        int minimumSalary = sc.nextInt();\n        List<Employee> result = findEmployees(employees, minimumSalary);\n        if (result.isEmpty()) {\n            System.out.println(\"No employees found\");\n        } else {\n            for (Employee e : result) {\n                System.out.println(e.name + \" \" + e.salary.get());\n            }\n        }\n        sc.close();\n    }\n}",
    "solutionCode": "import java.util.*;\nimport java.util.stream.Collectors;\n\nclass Employee {\n    String name;\n    Optional<Integer> salary;\n\n    Employee(String name, Integer salary) {\n        this.name = name;\n        this.salary = Optional.ofNullable(salary);\n    }\n}\n\npublic class Main {\n    public static List<Employee> findEmployees(List<Employee> employees, int minimumSalary) {\n        return employees.stream()\n            .filter(e -> e.salary.isPresent() && e.salary.get() >= minimumSalary)\n            .sorted(Comparator.comparingInt((Employee e) -> e.salary.get()).reversed()\n                .thenComparing(e -> e.name))\n            .collect(Collectors.toList());\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        List<Employee> employees = new ArrayList<>();\n        for (int i = 0; i < n; i++) {\n            String name = sc.next();\n            int salary = sc.nextInt();\n            if (salary == -1) {\n                employees.add(new Employee(name, null));\n            } else {\n                employees.add(new Employee(name, salary));\n            }\n        }\n        int minimumSalary = sc.nextInt();\n        List<Employee> result = findEmployees(employees, minimumSalary);\n        if (result.isEmpty()) {\n            System.out.println(\"No employees found\");\n        } else {\n            for (Employee e : result) {\n                System.out.println(e.name + \" \" + e.salary.get());\n            }\n        }\n        sc.close();\n    }\n}",
    "hints": [
      {
        "title": "Filter by Optional Presence",
        "text": "Check <code>e.salary.isPresent() && e.salary.get() >= minimumSalary</code>."
      },
      {
        "title": "Sorting Optionals",
        "text": "Extract value with <code>e.salary.get()</code> inside <code>Comparator.comparingInt(...).reversed()</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "5\nRahul 70000\nAmit -1\nNeha 90000\nRaj 60000\nKaran -1\n60000",
        "expected": "Neha 90000\nRahul 70000\nRaj 60000",
        "explanation": "Amit and Karan have -1 (missing salary) and are ignored. Neha (90k), Rahul (70k), Raj (60k) >= 60k."
      },
      {
        "id": 2,
        "input": "4\nA 40000\nB -1\nC 50000\nD 30000\n60000",
        "expected": "No employees found",
        "explanation": "No available salary is >= 60000."
      },
      {
        "id": 3,
        "input": "4\nRahul 70000\nAmit 70000\nNeha -1\nRaj 80000\n70000",
        "expected": "Raj 80000\nAmit 70000\nRahul 70000",
        "explanation": "Neha is ignored. Amit and Rahul tie at 70000, Amit comes first alphabetically."
      }
    ],
    "edgeCases": [
      {
        "id": 4,
        "input": "3\nX -1\nY -1\nZ -1\n50000",
        "expected": "No employees found",
        "explanation": "All employees have missing salary."
      },
      {
        "id": 5,
        "input": "4\nZara 60000\nBob -1\nAlex 60000\nCarl 60000\n50000",
        "expected": "Alex 60000\nCarl 60000\nZara 60000",
        "explanation": "Bob ignored. Alex, Carl, Zara tie at 60000, sorted alphabetically."
      }
    ]
  },
  "q75_ete_employee_bonus_lambda_expressions": {
    "num": "75",
    "id": "q75_ete_employee_bonus_lambda_expressions",
    "title": "Employee Bonus Calculation Using Lambda Expressions",
    "tag": "Functional Interfaces & Lambdas",
    "category": "Sample ETE",
    "language": "java",
    "subtitle": "@FunctionalInterface BonusCalculator with Strategy Lambda Implementations",
    "brief": "A company wants to calculate employee bonuses based on their salary.\nThe bonus calculation depends on the type of employee:\n1. Regular employee: Bonus = 10% of salary\n2. Senior employee: Bonus = 20% of salary\n3. Manager: Bonus = 30% of salary\n\nYou are given employee details and the employee type.\nCreate a functional interface called `BonusCalculator` that represents the bonus calculation operation. Use lambda expressions to calculate the bonus. The program should display the employee name, salary, bonus and total salary after adding the bonus.\n\nOutput format:\n`<name> <salary> <bonus> <total>` (bonus and total with 2 decimal places)\n\nFunction Signature:\n`public static double calculateBonus(int salary, BonusCalculator calculator)`\n\nFunctional Interface:\n`interface BonusCalculator { double calculate(int salary); }`",
    "inputFormat": "First line: integer n.\nNext n lines: employee name, salary, and employee type (Regular, Senior, Manager).",
    "outputFormat": "name salary bonus total (bonus and total formatted to 2 decimal places).",
    "starterCode": "import java.util.*;\n\n@FunctionalInterface\ninterface BonusCalculator {\n    double calculate(int salary);\n}\n\nclass Employee {\n    String name;\n    int salary;\n    String type;\n\n    Employee(String name, int salary, String type) {\n        this.name = name;\n        this.salary = salary;\n        this.type = type;\n    }\n}\n\npublic class Main {\n    public static double calculateBonus(int salary, BonusCalculator calculator) {\n        // Implement calculateBonus invoking the BonusCalculator functional interface\n        return 0.0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        List<Employee> employees = new ArrayList<>();\n        for (int i = 0; i < n; i++) {\n            String name = sc.next();\n            int salary = sc.nextInt();\n            String type = sc.next();\n            employees.add(new Employee(name, salary, type));\n        }\n\n        // Define lambda expressions for regular (10%), senior (20%), and manager (30%) bonuses\n        BonusCalculator regularBonus = s -> 0.0;\n        BonusCalculator seniorBonus = s -> 0.0;\n        BonusCalculator managerBonus = s -> 0.0;\n\n        for (Employee e : employees) {\n            double bonus = 0;\n            if (\"Regular\".equalsIgnoreCase(e.type)) {\n                bonus = calculateBonus(e.salary, regularBonus);\n            } else if (\"Senior\".equalsIgnoreCase(e.type)) {\n                bonus = calculateBonus(e.salary, seniorBonus);\n            } else if (\"Manager\".equalsIgnoreCase(e.type)) {\n                bonus = calculateBonus(e.salary, managerBonus);\n            }\n            double total = e.salary + bonus;\n            System.out.printf(java.util.Locale.US, \"%s %d %.2f %.2f%n\", e.name, e.salary, bonus, total);\n        }\n        sc.close();\n    }\n}",
    "solutionCode": "import java.util.*;\n\n@FunctionalInterface\ninterface BonusCalculator {\n    double calculate(int salary);\n}\n\nclass Employee {\n    String name;\n    int salary;\n    String type;\n\n    Employee(String name, int salary, String type) {\n        this.name = name;\n        this.salary = salary;\n        this.type = type;\n    }\n}\n\npublic class Main {\n    public static double calculateBonus(int salary, BonusCalculator calculator) {\n        return calculator.calculate(salary);\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        List<Employee> employees = new ArrayList<>();\n        for (int i = 0; i < n; i++) {\n            String name = sc.next();\n            int salary = sc.nextInt();\n            String type = sc.next();\n            employees.add(new Employee(name, salary, type));\n        }\n\n        BonusCalculator regularBonus = s -> s * 0.10;\n        BonusCalculator seniorBonus = s -> s * 0.20;\n        BonusCalculator managerBonus = s -> s * 0.30;\n\n        for (Employee e : employees) {\n            double bonus = 0;\n            if (\"Regular\".equalsIgnoreCase(e.type)) {\n                bonus = calculateBonus(e.salary, regularBonus);\n            } else if (\"Senior\".equalsIgnoreCase(e.type)) {\n                bonus = calculateBonus(e.salary, seniorBonus);\n            } else if (\"Manager\".equalsIgnoreCase(e.type)) {\n                bonus = calculateBonus(e.salary, managerBonus);\n            }\n            double total = e.salary + bonus;\n            System.out.printf(java.util.Locale.US, \"%s %d %.2f %.2f%n\", e.name, e.salary, bonus, total);\n        }\n        sc.close();\n    }\n}",
    "hints": [
      {
        "title": "Bonus Calculator Lambdas",
        "text": "Define lambdas: <code>s -> s * 0.10</code> for Regular, <code>s -> s * 0.20</code> for Senior, <code>s -> s * 0.30</code> for Manager."
      },
      {
        "title": "calculateBonus Implementation",
        "text": "In <code>calculateBonus(int salary, BonusCalculator calculator)</code>, simply return <code>calculator.calculate(salary)</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "3\nRahul 50000 Regular\nAmit 60000 Senior\nNeha 80000 Manager",
        "expected": "Rahul 50000 5000.00 55000.00\nAmit 60000 12000.00 72000.00\nNeha 80000 24000.00 104000.00",
        "explanation": "Rahul: 10% = 5000. Amit: 20% = 12000. Neha: 30% = 24000."
      },
      {
        "id": 2,
        "input": "2\nA 10000 Regular\nB 20000 Senior",
        "expected": "A 10000 1000.00 11000.00\nB 20000 4000.00 24000.00",
        "explanation": "Regular 10% = 1000, Senior 20% = 4000."
      },
      {
        "id": 3,
        "input": "1\nRaj 100000 Manager",
        "expected": "Raj 100000 30000.00 130000.00",
        "explanation": "Manager 30% = 30000."
      }
    ],
    "edgeCases": [
      {
        "id": 4,
        "input": "2\nBoss1 150000 Manager\nBoss2 200000 Manager",
        "expected": "Boss1 150000 45000.00 195000.00\nBoss2 200000 60000.00 260000.00",
        "explanation": "Two managers: 30% bonus each."
      },
      {
        "id": 5,
        "input": "1\nJohn 5000 Regular",
        "expected": "John 5000 500.00 5500.00",
        "explanation": "Regular 10% of 5000 = 500.00."
      }
    ]
  },
  "q76_st2_higher_order_function": {
    "num": "76",
    "id": "q76_st2_higher_order_function",
    "title": "Higher-Order Function with Lambda Operations",
    "tag": "Higher-Order Functions & Lambdas",
    "category": "ST2 Questions",
    "language": "java",
    "subtitle": "Higher-Order Method accepting Function<Integer, Integer> and Lambda Expressions",
    "brief": "Write a Java program that demonstrates a Higher-Order Function. Define a method that accepts a list of integers and a `Function<Integer, Integer>` as arguments and applies that function to every element. Based on the operation keyword, pass the appropriate lambda expression and print the transformed values.\n\nOperations:\n- `square`: outputs `x * x`\n- `cube`: outputs `x * x * x`\n- `negate`: outputs `-x`\n- `increment`: outputs `x + 1`\n\nCode Constraints:\n1 <= N <= 100\n-100 <= Each integer <= 100",
    "inputFormat": "First line: integer N.\nSecond line: N space-separated integers.\nThird line: operation keyword (square, cube, negate, or increment).",
    "outputFormat": "Print the transformed integers separated by spaces.",
    "starterCode": "import java.util.*;\nimport java.util.function.Function;\n\nclass Main {\n    // Define a higher-order method that accepts List<Integer> and Function<Integer, Integer>\n    public static void applyAndPrint(List<Integer> list, Function<Integer, Integer> func) {\n        // Apply function to each element and print space-separated\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read input, create appropriate lambda expression based on operation keyword, and invoke applyAndPrint\n    }\n}",
    "solutionCode": "import java.util.*;\nimport java.util.function.Function;\n\nclass Main {\n    public static void applyAndPrint(List<Integer> list, Function<Integer, Integer> func) {\n        for (int i = 0; i < list.size(); i++) {\n            System.out.print(func.apply(list.get(i)));\n            if (i < list.size() - 1) System.out.print(\" \");\n        }\n        System.out.println();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        List<Integer> list = new ArrayList<>();\n        for (int i = 0; i < n; i++) {\n            list.add(sc.nextInt());\n        }\n        String op = sc.next();\n        Function<Integer, Integer> func;\n        switch (op.toLowerCase()) {\n            case \"square\":\n                func = x -> x * x;\n                break;\n            case \"cube\":\n                func = x -> x * x * x;\n                break;\n            case \"negate\":\n                func = x -> -x;\n                break;\n            case \"increment\":\n                func = x -> x + 1;\n                break;\n            default:\n                func = x -> x;\n        }\n        applyAndPrint(list, func);\n    }\n}",
    "hints": [
      {
        "title": "Higher-Order Function",
        "text": "In Java, higher-order functions are implemented by methods that take functional interfaces like <code>Function&lt;T, R&gt;</code> as parameters."
      },
      {
        "title": "Switch Expressions or Statements",
        "text": "Assign lambda expressions to <code>Function&lt;Integer, Integer&gt;</code> based on the operation keyword."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "4\n1 2 3 4\nsquare",
        "expected": "1 4 9 16",
        "explanation": "Squares of 1, 2, 3, 4 are 1, 4, 9, 16."
      },
      {
        "id": 2,
        "input": "3\n2 -3 4\nnegate",
        "expected": "-2 3 -4",
        "explanation": "Negations of 2, -3, 4 are -2, 3, -4."
      },
      {
        "id": 3,
        "input": "2\n3 5\ncube",
        "expected": "27 125",
        "explanation": "Cubes of 3 and 5 are 27 and 125."
      }
    ],
    "edgeCases": [
      {
        "id": 4,
        "input": "3\n0 -1 99\nincrement",
        "expected": "1 0 100",
        "explanation": "Incrementing 0, -1, 99 yields 1, 0, 100."
      },
      {
        "id": 5,
        "input": "1\n-5\nsquare",
        "expected": "25",
        "explanation": "Square of -5 is 25."
      }
    ]
  },
  "q77_st2_custom_comparator_length_lexicographical": {
    "num": "77",
    "id": "q77_st2_custom_comparator_length_lexicographical",
    "title": "Sort Strings by Length then Alphabetically",
    "tag": "Lambda Comparators & Sorting",
    "category": "ST2 Questions",
    "language": "java",
    "subtitle": "Custom Comparator Using Lambda Expressions for Two-Level Sorting",
    "brief": "An inventory management software stores product codes that need to be organized primarily by their length. When two product codes have the same length, they should be ordered lexicographically (alphabetically).\n\nDevelop a Java program using Lambda Expressions to implement a custom Comparator interface for sorting a list of strings.\n\nCode Constraints:\n1 <= number of strings <= 100\n1 <= length of each string <= 50",
    "inputFormat": "A single line containing space-separated strings.",
    "outputFormat": "Print the sorted strings separated by a single space on a single line.",
    "starterCode": "import java.util.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read space-separated words, sort using a custom lambda Comparator (length ascending, then alphabetical), and print\n    }\n}",
    "solutionCode": "import java.util.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String line = sc.nextLine().trim();\n        if (line.isEmpty()) return;\n        String[] words = line.split(\"\\\\s+\");\n        List<String> list = new ArrayList<>(Arrays.asList(words));\n        list.sort((s1, s2) -> {\n            if (s1.length() != s2.length()) {\n                return Integer.compare(s1.length(), s2.length());\n            }\n            return s1.compareTo(s2);\n        });\n        System.out.println(String.join(\" \", list));\n    }\n}",
    "hints": [
      {
        "title": "Comparator Lambda",
        "text": "You can write <code>(s1, s2) -> s1.length() != s2.length() ? Integer.compare(s1.length(), s2.length()) : s1.compareTo(s2)</code> or use <code>Comparator.comparingInt(String::length).thenComparing(Comparator.naturalOrder())</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "banana fig apple date cherry kiwi",
        "expected": "fig date kiwi apple banana cherry",
        "explanation": "Sorted by length (3, 4, 4, 5, 6, 6) and ties broken alphabetically."
      },
      {
        "id": 2,
        "input": "cat dog bird ant",
        "expected": "ant cat dog bird",
        "explanation": "Length 3: ant, cat, dog; length 4: bird."
      },
      {
        "id": 3,
        "input": "zebra alpha beta",
        "expected": "beta zebra alpha",
        "explanation": "beta (4), zebra (5), alpha (5)."
      }
    ],
    "edgeCases": [
      {
        "id": 4,
        "input": "single",
        "expected": "single",
        "explanation": "Single word input."
      },
      {
        "id": 5,
        "input": "bb aa cc",
        "expected": "aa bb cc",
        "explanation": "All same length, sorted strictly alphabetically."
      }
    ]
  },
  "q78_st2_efficient_input_handling_bufferedreader": {
    "num": "78",
    "id": "q78_st2_efficient_input_handling_bufferedreader",
    "title": "Total Electricity Consumption with BufferedReader",
    "tag": "Fast I/O & Aggregations",
    "category": "ST2 Questions",
    "language": "java",
    "subtitle": "High-Volume Input Handling using BufferedReader",
    "brief": "An electricity distribution company is developing a billing module that processes consumption data collected from a large number of households. Since the system may receive a high volume of meter readings, efficient input handling is required to avoid unnecessary input-processing overhead.\n\nDevelop a Java program that:\n- Reads the number of households.\n- Accepts the corresponding electricity consumption readings.\n- Uses `BufferedReader` for efficient input handling.\n- Calculates the total units consumed by all households.\n- Displays the total consumption.\n\nCode Constraints:\n1 <= N <= 100000\n0 <= units <= 10000",
    "inputFormat": "The first line contains an integer N, representing the number of households.\nThe second line contains N integer values, where each value represents the electricity units consumed by one household.",
    "outputFormat": "Print the total number of units consumed by all households.",
    "starterCode": "import java.io.*;\n\nclass Main {\n    public static void main(String[] args) throws IOException {\n        // Use BufferedReader for fast input reading\n        \n    }\n}",
    "solutionCode": "import java.io.*;\n\nclass Main {\n    public static void main(String[] args) throws IOException {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line1 = br.readLine();\n        if (line1 == null || line1.trim().isEmpty()) return;\n        int n = Integer.parseInt(line1.trim());\n        String line2 = br.readLine();\n        if (line2 == null) return;\n        String[] parts = line2.trim().split(\"\\\\s+\");\n        long total = 0;\n        for (int i = 0; i < n && i < parts.length; i++) {\n            total += Long.parseLong(parts[i]);\n        }\n        System.out.println(total);\n    }\n}",
    "hints": [
      {
        "title": "Fast I/O",
        "text": "Use <code>BufferedReader</code> and <code>String.split(\"\\\\s+\")</code> to efficiently parse integers in high-throughput environments."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "5\n120 250 180 300 150",
        "expected": "1000",
        "explanation": "120 + 250 + 180 + 300 + 150 = 1000."
      },
      {
        "id": 2,
        "input": "3\n0 500 250",
        "expected": "750",
        "explanation": "0 + 500 + 250 = 750."
      },
      {
        "id": 3,
        "input": "1\n10000",
        "expected": "10000",
        "explanation": "Single household consumption."
      }
    ],
    "edgeCases": [
      {
        "id": 4,
        "input": "4\n0 0 0 0",
        "expected": "0",
        "explanation": "All households consumed 0 units."
      },
      {
        "id": 5,
        "input": "2\n10000 10000",
        "expected": "20000",
        "explanation": "High unit summation."
      }
    ]
  },
  "q79_st2_subscription_expiry_datetime": {
    "num": "79",
    "id": "q79_st2_subscription_expiry_datetime",
    "title": "Subscription Expiry Calculation with LocalDate",
    "tag": "Java Date-Time API",
    "category": "ST2 Questions",
    "language": "java",
    "subtitle": "Date Arithmetic, Remaining Validity & LocalDate Component Extraction",
    "brief": "A digital learning platform manages subscriptions by recording the date on which each subscription is activated and the number of days for which it remains valid. The system also tracks how many days of the subscription have already been utilized.\n\nDevelop a Java program using the Java Date-Time API to process subscription details and determine its validity information:\n1. Calculate the subscription expiry date by adding the complete validity period to the activation date.\n2. Determine the number of days still available after subtracting the days already used from the total validity period.\n3. Extract and display the year and month from the calculated expiry date.\nUse the `LocalDate` class for performing the required date calculations.\n\nCode Constraints:\nActivation date is valid.\n1 <= validityDays <= 365\n0 <= usedDays < validityDays\nYear is between 2020 and 2030.",
    "inputFormat": "The input consists of three lines:\nLine 1: Subscription activation date in format yyyy-MM-dd.\nLine 2: Subscription validity period in days.\nLine 3: Number of days already used.",
    "outputFormat": "Print the following on separate lines in order:\n1. Expiry date (yyyy-MM-dd)\n2. Remaining subscription days\n3. Year of the expiry date\n4. Month of the expiry date (in uppercase, e.g. SEPTEMBER)",
    "starterCode": "import java.util.Scanner;\nimport java.time.LocalDate;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read activation date, validityDays, and usedDays\n        // Compute expiry date, remaining days, year, and month\n    }\n}",
    "solutionCode": "import java.util.Scanner;\nimport java.time.LocalDate;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        String dateStr = sc.next();\n        int validityDays = sc.nextInt();\n        int usedDays = sc.nextInt();\n\n        LocalDate start = LocalDate.parse(dateStr);\n        LocalDate expiry = start.plusDays(validityDays);\n        int remainingDays = validityDays - usedDays;\n        int year = expiry.getYear();\n        String month = expiry.getMonth().name();\n\n        System.out.println(expiry);\n        System.out.println(remainingDays);\n        System.out.println(year);\n        System.out.println(month);\n    }\n}",
    "hints": [
      {
        "title": "LocalDate Methods",
        "text": "Use <code>LocalDate.parse(dateStr)</code>, <code>plusDays(validityDays)</code>, <code>getYear()</code>, and <code>getMonth().name()</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "2026-08-10\n30\n12",
        "expected": "2026-09-09\n18\n2026\nSEPTEMBER",
        "explanation": "August 10 + 30 days = Sept 9. Remaining: 30 - 12 = 18. Year: 2026. Month: SEPTEMBER."
      },
      {
        "id": 2,
        "input": "2025-01-01\n60\n20",
        "expected": "2025-03-02\n40\n2025\nMARCH",
        "explanation": "2025-01-01 + 60 days = 2025-03-02. Remaining: 40 days. Month: MARCH."
      },
      {
        "id": 3,
        "input": "2024-02-15\n15\n5",
        "expected": "2024-03-01\n10\n2024\nMARCH",
        "explanation": "2024 is a leap year (29 days in Feb), 2024-02-15 + 15 days = 2024-03-01."
      }
    ],
    "edgeCases": [
      {
        "id": 4,
        "input": "2023-12-25\n10\n0",
        "expected": "2024-01-04\n10\n2024\nJANUARY",
        "explanation": "Rolls over year boundary from Dec 2023 to Jan 2024."
      },
      {
        "id": 5,
        "input": "2026-05-01\n1\n0",
        "expected": "2026-05-02\n1\n2026\nMAY",
        "explanation": "1-day validity."
      }
    ]
  },
  "q80_st2_normalize_course_registrations": {
    "num": "80",
    "id": "q80_st2_normalize_course_registrations",
    "title": "Course Registration Summary",
    "tag": "Collections & Ordering",
    "category": "ST2 Questions",
    "language": "java",
    "subtitle": "Consolidate Redundant Course Records Preserving Insertion Order",
    "brief": "A training institute maintains learner course registration records. In the existing registration data, the course name is stored repeatedly whenever multiple learners enroll in the same course. Generate a normalized summary where each distinct course is represented only once along with the total number of registrations.\n\nRequirements:\n- Store the course name only once.\n- Maintain the total number of registrations for that course.\n- Preserve the order in which each course first appears in the input.\n- Display the course name along with its registration count.\n\nCode Constraints:\n1 <= N <= 100\nRegistration IDs are positive integers.\nCourse names contain no spaces.",
    "inputFormat": "The first line contains an integer N, representing the number of registration records.\nEach of the next N lines contains:\nRegistration ID\nCourse Name",
    "outputFormat": "For every distinct course, print:\nCourseName Count\nin the order of their first appearance.",
    "starterCode": "import java.util.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read N and registration records, count distinct courses preserving first appearance order\n    }\n}",
    "solutionCode": "import java.util.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        Map<String, Integer> counts = new LinkedHashMap<>();\n        for (int i = 0; i < n; i++) {\n            int regId = sc.nextInt();\n            String course = sc.next();\n            counts.put(course, counts.getOrDefault(course, 0) + 1);\n        }\n        for (Map.Entry<String, Integer> entry : counts.entrySet()) {\n            System.out.println(entry.getKey() + \" \" + entry.getValue());\n        }\n    }\n}",
    "hints": [
      {
        "title": "Order Preservation",
        "text": "Use <code>LinkedHashMap&lt;String, Integer&gt;</code> to maintain exact insertion order while tallying counts."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "6\n101 Java\n102 Python\n103 Java\n104 Database\n105 Python\n106 Java",
        "expected": "Java 3\nPython 2\nDatabase 1",
        "explanation": "Java appears 3 times, Python 2 times, Database 1 time."
      },
      {
        "id": 2,
        "input": "3\n1 A\n2 B\n3 C",
        "expected": "A 1\nB 1\nC 1",
        "explanation": "All distinct courses."
      },
      {
        "id": 3,
        "input": "4\n1 C++\n2 C++\n3 C++\n4 C++",
        "expected": "C++ 4",
        "explanation": "All registrations for same course."
      }
    ],
    "edgeCases": [
      {
        "id": 4,
        "input": "1\n100 DSA",
        "expected": "DSA 1",
        "explanation": "Single record."
      },
      {
        "id": 5,
        "input": "5\n10 React\n20 Node\n30 React\n40 React\n50 Node",
        "expected": "React 3\nNode 2",
        "explanation": "React first seen before Node."
      }
    ]
  },
  "q81_st2_warehouse_reorder_predicate": {
    "num": "81",
    "id": "q81_st2_warehouse_reorder_predicate",
    "title": "Warehouse Inventory Replenishment with Predicate",
    "tag": "Functional Interfaces & Predicate",
    "category": "ST2 Questions",
    "language": "java",
    "subtitle": "Evaluate Reorder Level using Predicate<Integer>",
    "brief": "A warehouse inventory system continuously monitors stock levels to determine replenishment requirements. A product is considered eligible for reordering when its current stock quantity is strictly less than a specified reorder level.\n\nDevelop a Java program that uses the functional interface `Predicate<Integer>` to evaluate each product's stock quantity.\n\nProgram Requirements:\n- Read stock quantities and required reorder level.\n- Define a `Predicate<Integer>` that determines whether a stock quantity requires replenishment.\n- Apply the predicate to every stock quantity.\n- Display only the quantities that satisfy the reorder condition in their original order.\n\nConstraints:\n1 <= N <= 100\n0 <= stock quantity <= 1000\n1 <= reorder level <= 1000",
    "inputFormat": "Line 1: integer N (number of products).\nLine 2: N space-separated integers (current stock quantities).\nLine 3: integer ReorderLevel.",
    "outputFormat": "Print all stock quantities strictly below the reorder level, separated by spaces in original order.",
    "starterCode": "import java.util.*;\nimport java.util.function.Predicate;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Define Predicate<Integer> and filter quantities strictly less than reorderLevel\n    }\n}",
    "solutionCode": "import java.util.*;\nimport java.util.function.Predicate;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        List<Integer> quantities = new ArrayList<>();\n        for (int i = 0; i < n; i++) {\n            quantities.add(sc.nextInt());\n        }\n        int reorderLevel = sc.nextInt();\n\n        Predicate<Integer> needsReorder = q -> q < reorderLevel;\n\n        List<String> res = new ArrayList<>();\n        for (int q : quantities) {\n            if (needsReorder.test(q)) {\n                res.add(String.valueOf(q));\n            }\n        }\n        System.out.println(String.join(\" \", res));\n    }\n}",
    "hints": [
      {
        "title": "Predicate Implementation",
        "text": "Declare <code>Predicate&lt;Integer&gt; needsReorder = q -&gt; q &lt; reorderLevel;</code> and test with <code>needsReorder.test(q)</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "6\n15 4 28 7 32 9\n10",
        "expected": "4 7 9",
        "explanation": "Quantities strictly less than 10 are 4, 7, 9."
      },
      {
        "id": 2,
        "input": "4\n50 60 70 80\n40",
        "expected": "",
        "explanation": "No quantities strictly below 40."
      },
      {
        "id": 3,
        "input": "3\n5 10 15\n11",
        "expected": "5 10",
        "explanation": "5 and 10 are strictly less than 11."
      }
    ],
    "edgeCases": [
      {
        "id": 4,
        "input": "3\n10 10 10\n10",
        "expected": "",
        "explanation": "Strictly less than 10 excludes values equal to 10."
      },
      {
        "id": 5,
        "input": "2\n0 1\n1",
        "expected": "0",
        "explanation": "0 is strictly less than 1."
      }
    ]
  },
  "q82_st2_research_lab_equipment_tracking_streams": {
    "num": "82",
    "id": "q82_st2_research_lab_equipment_tracking_streams",
    "title": "Research Lab Equipment Tracking with Streams",
    "tag": "Java Streams API",
    "category": "ST2 Questions",
    "language": "java",
    "subtitle": "Threshold Filtering, Max Element, Average & Non-Map Department Aggregation",
    "brief": "You are developing a Research Lab Equipment tracking system. Each equipment record contains an ID, name, department, and purchase price.\n\nWrite a Java program using the Java Streams API to perform the following operations:\n1. Display all equipment items whose price is strictly greater than the given threshold in original order (print ID, Name, Department, Price as integer).\n2. Find and display the most expensive equipment item (if tie, first appearing).\n3. Calculate and display the average price of all equipment items, rounded to 2 decimal places.\n4. Display the total number of equipment items in each department in alphabetical order. Do not use any Map implementation.\n\nConstraints:\n1 <= N <= 1000\n1 <= ID <= 10^6\n0 < Price <= 10^7\n0 <= T <= 10^7",
    "inputFormat": "Line 1: Integer N.\nNext N lines: ID Name Department Price (space-separated).\nLast line: Price threshold T.",
    "outputFormat": "Sections in order:\nEquipment Above Threshold\n<items>\nMost Expensive Equipment\n<item>\nAverage Price : X.XX\nDepartment Counts\n<department count>",
    "starterCode": "import java.util.*;\nimport java.util.stream.Collectors;\n\nclass Equipment {\n    int id;\n    String name;\n    String department;\n    double price;\n\n    public Equipment(int id, String name, String department, double price) {\n        this.id = id;\n        this.name = name;\n        this.department = department;\n        this.price = price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Process equipment records using Java Streams API\n    }\n}",
    "solutionCode": "import java.util.*;\nimport java.util.stream.Collectors;\n\nclass Equipment {\n    int id;\n    String name;\n    String department;\n    double price;\n\n    public Equipment(int id, String name, String department, double price) {\n        this.id = id;\n        this.name = name;\n        this.department = department;\n        this.price = price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        List<Equipment> list = new ArrayList<>();\n        for (int i = 0; i < n; i++) {\n            int id = sc.nextInt();\n            String name = sc.next();\n            String dept = sc.next();\n            double price = sc.nextDouble();\n            list.add(new Equipment(id, name, dept, price));\n        }\n        double threshold = sc.nextDouble();\n\n        System.out.println(\"Equipment Above Threshold\");\n        list.stream()\n            .filter(e -> e.price > threshold)\n            .forEach(e -> System.out.println(e.id + \" \" + e.name + \" \" + e.department + \" \" + (int)e.price));\n\n        System.out.println(\"Most Expensive Equipment\");\n        Equipment maxEquip = null;\n        for (Equipment e : list) {\n            if (maxEquip == null || e.price > maxEquip.price) {\n                maxEquip = e;\n            }\n        }\n        if (maxEquip != null) {\n            System.out.println(maxEquip.id + \" \" + maxEquip.name + \" \" + maxEquip.department + \" \" + (int)maxEquip.price);\n        }\n\n        double avg = list.stream().mapToDouble(e -> e.price).average().orElse(0.0);\n        System.out.printf(Locale.US, \"Average Price : %.2f\\n\", avg);\n\n        System.out.println(\"Department Counts\");\n        List<String> depts = list.stream().map(e -> e.department).distinct().sorted().collect(Collectors.toList());\n        for (String d : depts) {\n            long count = list.stream().filter(e -> e.department.equals(d)).count();\n            System.out.println(d + \" \" + count);\n        }\n    }\n}",
    "hints": [
      {
        "title": "Avoiding Map",
        "text": "Get distinct department names using <code>list.stream().map(e -> e.department).distinct().sorted()</code> and then count items matching each department using stream filter."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "6\n101 MicroscopeX Physics 450.5\n102 Centrifuge1 Chemistry 820.0\n103 Spectro9 Physics 150.25\n104 Oscillo7 Biology 999.75\n105 ThermoCyc Chemistry 300.0\n106 PipetteBot Physics 610.5\n400",
        "expected": "Equipment Above Threshold\n101 MicroscopeX Physics 450\n102 Centrifuge1 Chemistry 820\n104 Oscillo7 Biology 999\n106 PipetteBot Physics 610\nMost Expensive Equipment\n104 Oscillo7 Biology 999\nAverage Price : 555.17\nDepartment Counts\nBiology 1\nChemistry 2\nPhysics 3",
        "explanation": "Filters items with price > 400. Most expensive is Oscillo7 (999.75). Average is 555.17."
      },
      {
        "id": 2,
        "input": "2\n201 Laser Physics 1000.0\n202 Prism Physics 200.0\n500",
        "expected": "Equipment Above Threshold\n201 Laser Physics 1000\nMost Expensive Equipment\n201 Laser Physics 1000\nAverage Price : 600.00\nDepartment Counts\nPhysics 2",
        "explanation": "Only Physics department."
      }
    ],
    "edgeCases": [
      {
        "id": 3,
        "input": "1\n1 Item Alpha 50.0\n100",
        "expected": "Equipment Above Threshold\nMost Expensive Equipment\n1 Item Alpha 50\nAverage Price : 50.00\nDepartment Counts\nAlpha 1",
        "explanation": "No items above threshold."
      }
    ]
  },
  "q83_st2_employee_payroll_tracking_streams": {
    "num": "83",
    "id": "q83_st2_employee_payroll_tracking_streams",
    "title": "Employee Payroll Tracking with Streams",
    "tag": "Java Streams API",
    "category": "ST2 Questions",
    "language": "java",
    "subtitle": "Threshold Filtering, Max Salary, Average & Non-Map Designation Counts",
    "brief": "You are developing an Employee Payroll tracking system. Each employee record contains an ID, name, designation, and monthly salary.\n\nWrite a Java program using the Java Streams API to perform the following operations:\n1. Display all employees whose salary is strictly greater than the given salary threshold (print ID, Name, Designation, Salary as integer).\n2. Find and display the employee with the highest salary.\n3. Calculate and display the average salary of all employees, rounded to 2 decimal places.\n4. Display the total number of employees for each designation in alphabetical order. Do not use HashMap or TreeMap.\n\nConstraints:\n1 <= N <= 1000\n1 <= ID <= 10^6\n0 < Salary <= 10^7\n0 <= T <= 10^7",
    "inputFormat": "Line 1: Integer N.\nNext N lines: ID Name Designation Salary (space-separated).\nLast line: Salary threshold T.",
    "outputFormat": "Sections in order:\nEmployees Above Threshold\n<employees>\nHighest Paid Employee\n<employee>\nAverage Salary : X.XX\nDesignation Counts\n<designation count>",
    "starterCode": "import java.util.*;\nimport java.util.stream.Collectors;\n\nclass Emp {\n    int id;\n    String name;\n    String designation;\n    double salary;\n\n    public Emp(int id, String name, String designation, double salary) {\n        this.id = id;\n        this.name = name;\n        this.designation = designation;\n        this.salary = salary;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Process employee payroll records using Java Streams API\n    }\n}",
    "solutionCode": "import java.util.*;\nimport java.util.stream.Collectors;\n\nclass Emp {\n    int id;\n    String name;\n    String designation;\n    double salary;\n\n    public Emp(int id, String name, String designation, double salary) {\n        this.id = id;\n        this.name = name;\n        this.designation = designation;\n        this.salary = salary;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        List<Emp> list = new ArrayList<>();\n        for (int i = 0; i < n; i++) {\n            int id = sc.nextInt();\n            String name = sc.next();\n            String desig = sc.next();\n            double salary = sc.nextDouble();\n            list.add(new Emp(id, name, desig, salary));\n        }\n        double threshold = sc.nextDouble();\n\n        System.out.println(\"Employees Above Threshold\");\n        list.stream()\n            .filter(e -> e.salary > threshold)\n            .forEach(e -> System.out.println(e.id + \" \" + e.name + \" \" + e.designation + \" \" + (int)e.salary));\n\n        System.out.println(\"Highest Paid Employee\");\n        Emp highest = null;\n        for (Emp e : list) {\n            if (highest == null || e.salary > highest.salary) {\n                highest = e;\n            }\n        }\n        if (highest != null) {\n            System.out.println(highest.id + \" \" + highest.name + \" \" + highest.designation + \" \" + (int)highest.salary);\n        }\n\n        double avg = list.stream().mapToDouble(e -> e.salary).average().orElse(0.0);\n        System.out.printf(Locale.US, \"Average Salary : %.2f\\n\", avg);\n\n        System.out.println(\"Designation Counts\");\n        List<String> desigs = list.stream().map(e -> e.designation).distinct().sorted().collect(Collectors.toList());\n        for (String d : desigs) {\n            long count = list.stream().filter(e -> e.designation.equals(d)).count();\n            System.out.println(d + \" \" + count);\n        }\n    }\n}",
    "hints": [
      {
        "title": "Distinct and Sort",
        "text": "Extract distinct designations with <code>list.stream().map(e -> e.designation).distinct().sorted()</code> and count matches without Map."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "6\n101 Amit Manager 450.5\n102 Riya Analyst 820.0\n103 Karan Manager 150.25\n104 Neha Developer 999.75\n105 Raj Analyst 300.0\n106 Simran Manager 610.5\n400",
        "expected": "Employees Above Threshold\n101 Amit Manager 450\n102 Riya Analyst 820\n104 Neha Developer 999\n106 Simran Manager 610\nHighest Paid Employee\n104 Neha Developer 999\nAverage Salary : 555.17\nDesignation Counts\nAnalyst 2\nDeveloper 1\nManager 3",
        "explanation": "4 employees above 400. Neha is highest paid. Average is 555.17. Counts: Analyst 2, Developer 1, Manager 3."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "2\n101 John Lead 500.0\n102 Jane Lead 600.0\n700",
        "expected": "Employees Above Threshold\nHighest Paid Employee\n102 Jane Lead 600\nAverage Salary : 550.00\nDesignation Counts\nLead 2",
        "explanation": "No employee above 700 threshold."
      }
    ]
  },
  "q84_st2_employee_training_report_generator": {
    "num": "84",
    "id": "q84_st2_employee_training_report_generator",
    "title": "Employee Training Report Generator",
    "tag": "Java Date-Time API & Filtering",
    "category": "ST2 Questions",
    "language": "java",
    "subtitle": "Date Range Filtering, Status Verification & Multi-Level Sorting",
    "brief": "An HR department maintains records of employee training programs. Each record consists of an employee ID, employee name, training date, and training status.\n\nA training record must be included in the final report if and only if:\n1. The training status is COMPLETED.\n2. The training date is on or after the start date and on or before the end date, both inclusive.\n\nRequirements:\n- Output all qualifying records sorted in ascending order of training date.\n- If multiple records have the same training date, sort them alphabetically by employee name.\n- If no training record meets the criteria, print `NO TRAININGS`.\n\nConstraints:\n1 <= N <= 1000\n1 <= employeeId <= 100000\nstartDate <= endDate\nDates strictly formatted as yyyy-MM-dd.",
    "inputFormat": "Line 1: startDate in yyyy-MM-dd.\nLine 2: endDate in yyyy-MM-dd.\nLine 3: Integer N.\nNext N lines: employeeId employeeName trainingDate status",
    "outputFormat": "Print each qualifying record on a separate line as: employeeName trainingDate status, or NO TRAININGS.",
    "starterCode": "import java.util.*;\nimport java.time.LocalDate;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read date interval, N records, filter COMPLETED records within range, sort and display\n    }\n}",
    "solutionCode": "import java.util.*;\nimport java.time.LocalDate;\n\nclass TrainingRecord {\n    int employeeId;\n    String employeeName;\n    LocalDate trainingDate;\n    String status;\n\n    public TrainingRecord(int employeeId, String employeeName, LocalDate trainingDate, String status) {\n        this.employeeId = employeeId;\n        this.employeeName = employeeName;\n        this.trainingDate = trainingDate;\n        this.status = status;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        LocalDate startDate = LocalDate.parse(sc.next());\n        LocalDate endDate = LocalDate.parse(sc.next());\n        int n = sc.nextInt();\n        List<TrainingRecord> qualifying = new ArrayList<>();\n\n        for (int i = 0; i < n; i++) {\n            int id = sc.nextInt();\n            String name = sc.next();\n            LocalDate date = LocalDate.parse(sc.next());\n            String status = sc.next();\n\n            if (status.equalsIgnoreCase(\"COMPLETED\") && !date.isBefore(startDate) && !date.isAfter(endDate)) {\n                qualifying.add(new TrainingRecord(id, name, date, status));\n            }\n        }\n\n        if (qualifying.isEmpty()) {\n            System.out.println(\"NO TRAININGS\");\n            return;\n        }\n\n        qualifying.sort(Comparator.comparing((TrainingRecord r) -> r.trainingDate)\n                                  .thenComparing(r -> r.employeeName));\n\n        for (TrainingRecord r : qualifying) {\n            System.out.println(r.employeeName + \" \" + r.trainingDate + \" \" + r.status);\n        }\n    }\n}",
    "hints": [
      {
        "title": "Date Range Check",
        "text": "Use <code>!date.isBefore(startDate) && !date.isAfter(endDate)</code> to check inclusivity."
      },
      {
        "title": "Sorting",
        "text": "Use <code>Comparator.comparing(r -> r.trainingDate).thenComparing(r -> r.employeeName)</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "2024-01-01\n2024-03-31\n4\n101 Alice 2024-01-15 COMPLETED\n102 Bob 2024-02-10 PENDING\n103 Charlie 2024-01-15 COMPLETED\n104 David 2024-04-01 COMPLETED",
        "expected": "Alice 2024-01-15 COMPLETED\nCharlie 2024-01-15 COMPLETED",
        "explanation": "Alice and Charlie completed training within Jan-March 2024. Same date, Alice comes first alphabetically."
      },
      {
        "id": 2,
        "input": "2024-01-01\n2024-01-31\n1\n101 Alice 2024-01-15 PENDING",
        "expected": "NO TRAININGS",
        "explanation": "Status is not COMPLETED."
      }
    ],
    "edgeCases": [
      {
        "id": 3,
        "input": "2024-05-10\n2024-05-10\n1\n101 John 2024-05-10 COMPLETED",
        "expected": "John 2024-05-10 COMPLETED",
        "explanation": "Exact boundary date matching."
      }
    ]
  },
  "q85_st2_employee_contact_directory_optional": {
    "num": "85",
    "id": "q85_st2_employee_contact_directory_optional",
    "title": "Employee Contact Directory with Optional",
    "tag": "Optional<T> & Streams",
    "category": "ST2 Questions",
    "language": "java",
    "subtitle": "Department Filtering, Fallback Default Email & Optional Resolution",
    "brief": "An organization maintains an employee contact directory. Each employee record contains an employee ID, employee name, department, and email address.\n\nSome employees have not yet provided an email address, represented by `NA`.\n\nThe HR department wants to generate a communication list for a selected department:\n- If a valid email address is available, use it.\n- If unavailable (NA), use the default: `not-provided@company.com`.\n- Use `Optional<String>` to handle missing email addresses.\n- Filter by requested department.\n- Sort alphabetically by employee name.\n- If no employee belongs to requested department, print `NO EMPLOYEES`.\n\nConstraints:\n1 <= N <= 1000\n1 <= employeeId <= 100000",
    "inputFormat": "Line 1: Integer N.\nLine 2: Target department.\nNext N lines: employeeId employeeName department email",
    "outputFormat": "employeeName resolvedEmail (alphabetical by name), or NO EMPLOYEES.",
    "starterCode": "import java.util.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Process contact directory using Optional<String>\n    }\n}",
    "solutionCode": "import java.util.*;\n\nclass Contact {\n    int id;\n    String name;\n    String department;\n    Optional<String> email;\n\n    public Contact(int id, String name, String department, Optional<String> email) {\n        this.id = id;\n        this.name = name;\n        this.department = department;\n        this.email = email;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        String targetDept = sc.next();\n\n        List<Contact> list = new ArrayList<>();\n        for (int i = 0; i < n; i++) {\n            int id = sc.nextInt();\n            String name = sc.next();\n            String dept = sc.next();\n            String rawEmail = sc.next();\n            Optional<String> emailOpt = (rawEmail.equals(\"NA\") || rawEmail.isEmpty())\n                    ? Optional.empty()\n                    : Optional.of(rawEmail);\n            list.add(new Contact(id, name, dept, emailOpt));\n        }\n\n        List<Contact> matching = new ArrayList<>();\n        for (Contact c : list) {\n            if (c.department.equals(targetDept)) {\n                matching.add(c);\n            }\n        }\n\n        if (matching.isEmpty()) {\n            System.out.println(\"NO EMPLOYEES\");\n            return;\n        }\n\n        matching.sort(Comparator.comparing(c -> c.name));\n\n        for (Contact c : matching) {\n            String resolvedEmail = c.email.orElse(\"not-provided@company.com\");\n            System.out.println(c.name + \" \" + resolvedEmail);\n        }\n    }\n}",
    "hints": [
      {
        "title": "Optional Resolution",
        "text": "Wrap email in <code>Optional.ofNullable(...)</code> or <code>Optional.empty()</code> if 'NA', then resolve with <code>email.orElse(\"not-provided@company.com\")</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "5\nEngineering\n101 Alice Engineering alice@company.com\n102 Bob HR bob@company.com\n103 Charlie Engineering NA\n104 David Engineering david@company.com\n105 Emma Sales NA",
        "expected": "Alice alice@company.com\nCharlie not-provided@company.com\nDavid david@company.com",
        "explanation": "Engineering employees sorted alphabetically. Charlie has NA so gets not-provided@company.com."
      },
      {
        "id": 2,
        "input": "2\nMarketing\n101 Alice Engineering alice@company.com\n102 Bob HR bob@company.com",
        "expected": "NO EMPLOYEES",
        "explanation": "No marketing employees."
      }
    ],
    "edgeCases": [
      {
        "id": 3,
        "input": "1\nQA\n99 Peter QA NA",
        "expected": "Peter not-provided@company.com",
        "explanation": "Single QA employee with NA email."
      }
    ]
  },
  "q86_st2_pure_java_relational_join_aggregation": {
    "num": "86",
    "id": "q86_st2_pure_java_relational_join_aggregation",
    "title": "Pure Java Relational Join and Group Aggregation",
    "tag": "In-Memory Relational Processing",
    "category": "ST2 Questions",
    "language": "java",
    "subtitle": "In-Memory INNER JOIN, GROUP BY & HAVING Filter",
    "brief": "An online store keeps customers and orders as separate in-memory collections. Each order contains a customer ID and an amount. Generate a spending report equivalent to an INNER JOIN followed by GROUP BY customer and SUM(amount), then apply a HAVING condition.\n\nThe implementation must be pure Java; do not use SQL, JDBC, or a database connection.\n\nProgram Requirements:\n- Match orders to customers using customer ID (orders with invalid customer IDs are ignored).\n- Combine all matching orders for each customer and calculate total spending.\n- Keep only customers whose total spending is at least the given minimum amount (HAVING condition).\n- Sort qualifying customers by total amount in descending order. Break ties by customer name in ascending alphabetical order.\n- If no customer qualifies, print `NO CUSTOMERS`.\n\nConstraints:\n1 <= C <= 1000\n0 <= O <= 5000",
    "inputFormat": "Line 1: Integer C (customers count).\nNext C lines: customerId customerName.\nNext line: Integer O (orders count).\nNext O lines: customerId productId amount.\nFinal line: Minimum total amount threshold.",
    "outputFormat": "customerName totalAmount (formatted to two decimal places), or NO CUSTOMERS.",
    "starterCode": "import java.util.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Implement in-memory JOIN, GROUP BY, and HAVING without SQL/JDBC\n    }\n}",
    "solutionCode": "import java.util.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int cCount = sc.nextInt();\n        Map<Integer, String> customers = new HashMap<>();\n        for (int i = 0; i < cCount; i++) {\n            customers.put(sc.nextInt(), sc.next());\n        }\n        int oCount = sc.nextInt();\n        Map<Integer, Double> customerTotals = new HashMap<>();\n        for (int i = 0; i < oCount; i++) {\n            int custId = sc.nextInt();\n            int prodId = sc.nextInt();\n            double amount = sc.nextDouble();\n            if (customers.containsKey(custId)) {\n                customerTotals.put(custId, customerTotals.getOrDefault(custId, 0.0) + amount);\n            }\n        }\n        double minAmount = sc.nextDouble();\n\n        List<Map.Entry<String, Double>> results = new ArrayList<>();\n        for (Map.Entry<Integer, Double> entry : customerTotals.entrySet()) {\n            if (entry.getValue() >= minAmount) {\n                results.add(new AbstractMap.SimpleEntry<>(customers.get(entry.getKey()), entry.getValue()));\n            }\n        }\n\n        if (results.isEmpty()) {\n            System.out.println(\"NO CUSTOMERS\");\n            return;\n        }\n\n        results.sort((e1, e2) -> {\n            int cmp = Double.compare(e2.getValue(), e1.getValue());\n            if (cmp != 0) return cmp;\n            return e1.getKey().compareTo(e2.getKey());\n        });\n\n        for (Map.Entry<String, Double> r : results) {\n            System.out.printf(Locale.US, \"%s %.2f\\n\", r.getKey(), r.getValue());\n        }\n    }\n}",
    "hints": [
      {
        "title": "Map Joining",
        "text": "Store customers in a Map <code>id -&gt; name</code>, aggregate totals in <code>id -&gt; sum</code>, filter sums &gt;= threshold, and sort descending by sum with name tie-breaking."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "5\n101 Alice\n102 Bob\n103 Charlie\n104 David\n105 Emma\n7\n101 101 250.50\n102 102 500.00\n101 103 300.00\n103 104 150.75\n106 105 1000.00\n104 106 800.00\n102 107 250.00\n500.00",
        "expected": "David 800.00\nBob 750.00\nAlice 550.50",
        "explanation": "David total = 800.00, Bob total = 750.00, Alice total = 550.50 (order 106 has invalid customer 106 so ignored). All >= 500."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "2\n1 A\n2 B\n1\n1 10 50.0\n100.0",
        "expected": "NO CUSTOMERS",
        "explanation": "No customer reaches 100.0 threshold."
      }
    ]
  },
  "q87_st2_promotional_campaign_product_discount": {
    "num": "87",
    "id": "q87_st2_promotional_campaign_product_discount",
    "title": "Promotional Product Catalog Discount",
    "tag": "Function<Double, Double> & Lambdas",
    "category": "ST2 Questions",
    "language": "java",
    "subtitle": "Reusable Price Transformation using Function<Double, Double>",
    "brief": "An online retail platform is updating the prices displayed in its product catalog as part of a promotional campaign. A common discount percentage is applied to all products, but original prices may differ.\n\nDevelop a Java program using the functional interface `Function<Double, Double>` to perform the price transformation. The function should accept the original product price and return the corresponding final price after applying the given discount percentage.\n\nDisplay each resulting price rounded to two decimal places, with one price per line.\n\nConstraints:\n1 <= N <= 100\n1 <= price <= 100000\n0 <= discount <= 90",
    "inputFormat": "Line 1: Integer N.\nLine 2: N space-separated product prices.\nLine 3: Discount percentage.",
    "outputFormat": "Print the final discounted price of each product on a separate line, formatted to exactly two decimal places.",
    "starterCode": "import java.util.*;\nimport java.util.function.Function;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read prices, discount percentage, define Function<Double, Double>, and print discounted prices\n    }\n}",
    "solutionCode": "import java.util.*;\nimport java.util.function.Function;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        double[] prices = new double[n];\n        for (int i = 0; i < n; i++) {\n            prices[i] = sc.nextDouble();\n        }\n        double discountPct = sc.nextDouble();\n\n        Function<Double, Double> discountFn = p -> p * (1.0 - discountPct / 100.0);\n\n        for (int i = 0; i < n; i++) {\n            System.out.printf(Locale.US, \"%.2f\\n\", discountFn.apply(prices[i]));\n        }\n    }\n}",
    "hints": [
      {
        "title": "Function Formula",
        "text": "Formula is <code>p * (1.0 - discount / 100.0)</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "4\n1000 2500 800 1500\n10",
        "expected": "900.00\n2250.00\n720.00\n1350.00",
        "explanation": "10% discount subtracted from each price."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "1\n100\n0",
        "expected": "100.00",
        "explanation": "0% discount."
      }
    ]
  },
  "q88_st2_1nf_student_subject_normalizer": {
    "num": "88",
    "id": "q88_st2_1nf_student_subject_normalizer",
    "title": "1NF Student Subject Normalizer",
    "tag": "String Processing & Normalization",
    "category": "ST2 Questions",
    "language": "java",
    "subtitle": "Convert Comma-Separated Values into First Normal Form (1NF)",
    "brief": "An educational examination system maintains student subject information in a compact format where multiple subjects are stored together in a single field separated by commas.\n\nConvert each student record into First Normal Form (1NF) format, where every record contains exactly one student and one subject.\n\nRequirements:\n- Separate comma-separated subject lists into individual subjects.\n- Generate a separate record for each subject associated with a student.\n- Preserve the original order of students.\n- Preserve the original order of subjects within each student's record.\n\nConstraints:\n1 <= N <= 50\n1 <= subjects per student <= 5",
    "inputFormat": "First line: Integer N.\nEach of the next N lines contains:\nStudentID Comma-separated list of subjects",
    "outputFormat": "Print each subject as an individual record in format: StudentID Subject, maintaining input order.",
    "starterCode": "import java.util.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Normalize comma-separated student subjects into 1NF records\n    }\n}",
    "solutionCode": "import java.util.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        for (int i = 0; i < n; i++) {\n            int studentId = sc.nextInt();\n            String subjectsStr = sc.next();\n            String[] subs = subjectsStr.split(\",\");\n            for (String s : subs) {\n                if (!s.isEmpty()) {\n                    System.out.println(studentId + \" \" + s);\n                }\n            }\n        }\n    }\n}",
    "hints": [
      {
        "title": "String Splitting",
        "text": "Use <code>subjectsStr.split(\",\")</code> and iterate over each subject."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "3\n101 Mathematics,Physics,Chemistry\n102 Biology,English\n103 Mathematics,Computer",
        "expected": "101 Mathematics\n101 Physics\n101 Chemistry\n102 Biology\n102 English\n103 Mathematics\n103 Computer",
        "explanation": "Expanded into 1NF atomic records."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "1\n999 Science",
        "expected": "999 Science",
        "explanation": "Single subject student."
      }
    ]
  },
  "q89_st2_warehouse_stock_adjustment_lambda": {
    "num": "89",
    "id": "q89_st2_warehouse_stock_adjustment_lambda",
    "title": "Warehouse Stock Adjustment with Functional Interface",
    "tag": "Functional Interfaces & Lambdas",
    "category": "ST2 Questions",
    "language": "java",
    "subtitle": "Dynamic Arithmetic Dispatch via Custom Functional Interface",
    "brief": "A warehouse management system maintains the current inventory level of a product and supports multiple stock adjustment operations:\n- `ADD`: increases current stock by specified quantity.\n- `REMOVE`: decreases current stock by specified quantity.\n- `DOUBLE`: multiplies current stock by 2 (provided quantity must not affect calculation).\n\nDevelop a method that accepts current stock, quantity, and an operation as a function using a functional interface and lambda expressions.\n\nConstraints:\n0 <= initialStock <= 10000\n0 <= quantity <= 5000",
    "inputFormat": "Single line with three values: initialStock operation quantity",
    "outputFormat": "Print the updated stock quantity after performing the specified operation.",
    "starterCode": "import java.util.*;\n\n@FunctionalInterface\ninterface StockOperation {\n    int apply(int currentStock, int quantity);\n}\n\nclass Main {\n    public static int processStock(int currentStock, int quantity, StockOperation op) {\n        return op.apply(currentStock, quantity);\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read input, pass appropriate lambda to processStock, and print result\n    }\n}",
    "solutionCode": "import java.util.*;\n\n@FunctionalInterface\ninterface StockOperation {\n    int apply(int currentStock, int quantity);\n}\n\nclass Main {\n    public static int processStock(int currentStock, int quantity, StockOperation op) {\n        return op.apply(currentStock, quantity);\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int initialStock = sc.nextInt();\n        String opStr = sc.next();\n        int quantity = sc.nextInt();\n\n        StockOperation op;\n        switch (opStr.toUpperCase()) {\n            case \"ADD\":\n                op = (stock, q) -> stock + q;\n                break;\n            case \"REMOVE\":\n                op = (stock, q) -> stock - q;\n                break;\n            case \"DOUBLE\":\n                op = (stock, q) -> stock * 2;\n                break;\n            default:\n                op = (stock, q) -> stock;\n        }\n\n        int result = processStock(initialStock, quantity, op);\n        System.out.println(result);\n    }\n}",
    "hints": [
      {
        "title": "Functional Interface",
        "text": "Pass <code>(stock, q) -> stock + q</code> or <code>(stock, q) -> stock * 2</code> as the lambda implementation."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "500 ADD 200",
        "expected": "700",
        "explanation": "500 + 200 = 700."
      },
      {
        "id": 2,
        "input": "500 REMOVE 150",
        "expected": "350",
        "explanation": "500 - 150 = 350."
      },
      {
        "id": 3,
        "input": "400 DOUBLE 100",
        "expected": "800",
        "explanation": "400 * 2 = 800 (quantity ignored)."
      }
    ],
    "edgeCases": [
      {
        "id": 4,
        "input": "0 ADD 50",
        "expected": "50",
        "explanation": "Initial 0 stock."
      }
    ]
  },
  "q90_st2_machinery_maintenance_localdate": {
    "num": "90",
    "id": "q90_st2_machinery_maintenance_localdate",
    "title": "Machinery Routine Maintenance with LocalDate",
    "tag": "Java Date-Time API",
    "category": "ST2 Questions",
    "language": "java",
    "subtitle": "Calculate Maintenance Due Date, Day of Month & Month Value",
    "brief": "An industrial plant schedules routine maintenance for machinery at fixed intervals after installation. The management needs to calculate when the next maintenance is due, how many operational days are left, and specific timing details.\n\nDevelop a Java program using `LocalDate` to process machinery details:\n1. Calculate next maintenance date by adding service interval (in days) to installation date.\n2. Determine operational days still available (intervalDays - elapsedDays).\n3. Extract and display the day of the month and numeric month value from the calculated maintenance date.\n\nConstraints:\n1 <= intervalDays <= 180\n0 <= elapsedDays < intervalDays\nYear between 2020 and 2030.",
    "inputFormat": "Line 1: Machinery installation date in format yyyy-MM-dd.\nLine 2: Service interval period in days (intervalDays).\nLine 3: Number of days already elapsed (elapsedDays).",
    "outputFormat": "Print on separate lines:\n1. Next maintenance date (yyyy-MM-dd)\n2. Remaining operational days\n3. Day of the month of the maintenance date\n4. Month value of the maintenance date (numeric, 1-12)",
    "starterCode": "import java.util.*;\nimport java.time.LocalDate;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Process machinery maintenance using LocalDate\n    }\n}",
    "solutionCode": "import java.util.*;\nimport java.time.LocalDate;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        String dateStr = sc.next();\n        int intervalDays = sc.nextInt();\n        int elapsedDays = sc.nextInt();\n\n        LocalDate installDate = LocalDate.parse(dateStr);\n        LocalDate nextDate = installDate.plusDays(intervalDays);\n        int remainingDays = intervalDays - elapsedDays;\n        int dayOfMonth = nextDate.getDayOfMonth();\n        int monthValue = nextDate.getMonthValue();\n\n        System.out.println(nextDate);\n        System.out.println(remainingDays);\n        System.out.println(dayOfMonth);\n        System.out.println(monthValue);\n    }\n}",
    "hints": [
      {
        "title": "LocalDate Month Value",
        "text": "Use <code>getMonthValue()</code> to get the numeric month (1 to 12) rather than <code>getMonth()</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "2026-03-15\n45\n15",
        "expected": "2026-04-29\n30\n29\n4",
        "explanation": "March 15 + 45 days = April 29. Remaining: 30 days. Day: 29. Month: 4."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "2024-01-01\n31\n0",
        "expected": "2024-02-01\n31\n1\n2",
        "explanation": "Feb 1 has day 1 and month 2."
      }
    ]
  },
  "q91_st2_separate_even_odd_predicate": {
    "num": "91",
    "id": "q91_st2_separate_even_odd_predicate",
    "title": "Classify Even and Odd Numbers with Predicate",
    "tag": "Predicate<T> & Partitioning",
    "category": "ST2 Questions",
    "language": "java",
    "subtitle": "Partition List of Integers Preserving Relative Order",
    "brief": "A data collection system processes a list of integers and needs to separate even and odd values for downstream processing.\n\nDevelop a Java program using Lambda Expressions that:\n1. Implements a `Predicate<Integer>` using a Lambda Expression to check if an integer is even.\n2. Filters input numbers into two separate groups: even numbers first, followed by odd numbers.\n3. Preserves the original relative order of the numbers within each group.\n4. Prints the classified numbers on a single line separated by spaces.\n\nConstraints:\n1 <= count of numbers <= 100\n-1000 <= number <= 1000",
    "inputFormat": "A single line containing space-separated integers.",
    "outputFormat": "Print the even numbers followed by the odd numbers on a single line, separated by spaces.",
    "starterCode": "import java.util.*;\nimport java.util.function.Predicate;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Separate even and odd numbers using Predicate<Integer>\n    }\n}",
    "solutionCode": "import java.util.*;\nimport java.util.function.Predicate;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String line = sc.nextLine().trim();\n        if (line.isEmpty()) return;\n        String[] tokens = line.split(\"\\\\s+\");\n\n        List<Integer> numbers = new ArrayList<>();\n        for (String t : tokens) {\n            numbers.add(Integer.parseInt(t));\n        }\n\n        Predicate<Integer> isEven = x -> x % 2 == 0;\n\n        List<String> evens = new ArrayList<>();\n        List<String> odds = new ArrayList<>();\n\n        for (int x : numbers) {\n            if (isEven.test(x)) {\n                evens.add(String.valueOf(x));\n            } else {\n                odds.add(String.valueOf(x));\n            }\n        }\n\n        List<String> all = new ArrayList<>(evens);\n        all.addAll(odds);\n        System.out.println(String.join(\" \", all));\n    }\n}",
    "hints": [
      {
        "title": "Predicate",
        "text": "Define <code>Predicate&lt;Integer&gt; isEven = x -&gt; x % 2 == 0;</code> and iterate through numbers adding to evens or odds."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "12 7 9 4 15 22 3",
        "expected": "12 4 22 7 9 15 3",
        "explanation": "Evens (12, 4, 22) followed by odds (7, 9, 15, 3)."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "2 4 6 8",
        "expected": "2 4 6 8",
        "explanation": "All evens."
      },
      {
        "id": 3,
        "input": "1 3 5 7",
        "expected": "1 3 5 7",
        "explanation": "All odds."
      }
    ]
  },
  "q92_st2_words_grouped_by_length_streams": {
    "num": "92",
    "id": "q92_st2_words_grouped_by_length_streams",
    "title": "Group Words by Length using Stream Collectors",
    "tag": "Collectors.groupingBy & Counting",
    "category": "ST2 Questions",
    "language": "java",
    "subtitle": "Group Words by Length and Count Frequencies in Ascending Order of Length",
    "brief": "Given N words, write a Java program using the Stream API and Collectors (`groupingBy`) to group words by their length and count how many words fall into each length group. Print each distinct length together with its word count, in ascending order of length.\n\nConstraints:\n1 <= N <= 100\n1 <= length of each word <= 100\nWords contain no spaces.",
    "inputFormat": "The first line contains an integer N.\nThe second line contains N space-separated words.",
    "outputFormat": "For each distinct word length (in ascending order), print the length and the number of words of that length, separated by a space, one group per line: length count",
    "starterCode": "import java.util.*;\nimport java.util.stream.Collectors;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Group words by length using Stream API and Collectors.groupingBy\n    }\n}",
    "solutionCode": "import java.util.*;\nimport java.util.stream.Collectors;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        List<String> words = new ArrayList<>();\n        for (int i = 0; i < n; i++) {\n            words.add(sc.next());\n        }\n\n        Map<Integer, Long> countByLen = words.stream()\n            .collect(Collectors.groupingBy(String::length, TreeMap::new, Collectors.counting()));\n\n        for (Map.Entry<Integer, Long> entry : countByLen.entrySet()) {\n            System.out.println(entry.getKey() + \" \" + entry.getValue());\n        }\n    }\n}",
    "hints": [
      {
        "title": "TreeMap with groupingBy",
        "text": "Pass <code>TreeMap::new</code> to <code>Collectors.groupingBy(String::length, TreeMap::new, Collectors.counting())</code> to automatically sort lengths ascendingly."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "5\napple bat car dog elephant",
        "expected": "3 3\n5 1\n8 1",
        "explanation": "bat, car, dog have length 3 (count 3); apple has length 5 (count 1); elephant has length 8 (count 1)."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "3\na bb ccc",
        "expected": "1 1\n2 1\n3 1",
        "explanation": "1 of each length."
      }
    ]
  },
  "q93_st2_in_memory_banking_transaction_rollback": {
    "num": "93",
    "id": "q93_st2_in_memory_banking_transaction_rollback",
    "title": "In-Memory Banking System with BEGIN, COMMIT & ROLLBACK",
    "tag": "State Management & Snapshots",
    "category": "ST2 Questions",
    "language": "java",
    "subtitle": "Transactional Command Processing with Snapshot Rollback",
    "brief": "A small banking system stores account records in memory. Each account record contains an account ID, owner name, and balance.\n\nThe system must validate account records before adding them: Account IDs must be unique, owner names must be non-empty, and account balances cannot be negative.\n\nTransactional Commands:\n- `BEGIN`: Starts an active transaction and creates a snapshot of the account state.\n- `TRANSFER fromId toId amount`: Allowed only when a transaction is active, amount is positive, both accounts exist, and source account has sufficient balance.\n- `COMMIT`: Makes all changes permanent.\n- `ROLLBACK`: Restores the account state to the snapshot taken when BEGIN was called.\n\nPrint all valid account records in their original insertion order after all commands have been processed.\n\nConstraints:\n1 <= N <= 100\n1 <= M <= 500",
    "inputFormat": "Line 1: Integer N (number of account records).\nNext N lines: accountId owner initialBalance\nNext line: Integer M (number of commands).\nNext M lines: Command (BEGIN, TRANSFER fromId toId amount, COMMIT, ROLLBACK).",
    "outputFormat": "Print every valid account after all commands in format: accountId owner balance in original insertion order.",
    "starterCode": "import java.util.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Implement in-memory banking system with transaction snapshot and rollback\n    }\n}",
    "solutionCode": "import java.util.*;\n\nclass Account {\n    int id;\n    String owner;\n    int balance;\n\n    public Account(int id, String owner, int balance) {\n        this.id = id;\n        this.owner = owner;\n        this.balance = balance;\n    }\n\n    public Account copy() {\n        return new Account(id, owner, balance);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n\n        List<Integer> order = new ArrayList<>();\n        Map<Integer, Account> accounts = new HashMap<>();\n\n        for (int i = 0; i < n; i++) {\n            int id = sc.nextInt();\n            String owner = sc.next();\n            int balance = sc.nextInt();\n\n            if (balance < 0 || owner == null || owner.trim().isEmpty() || accounts.containsKey(id)) {\n                continue;\n            }\n            Account acc = new Account(id, owner, balance);\n            accounts.put(id, acc);\n            order.add(id);\n        }\n\n        int m = sc.nextInt();\n        boolean inTransaction = false;\n        Map<Integer, Account> snapshot = null;\n\n        for (int i = 0; i < m; i++) {\n            String cmd = sc.next();\n            if (cmd.equals(\"BEGIN\")) {\n                inTransaction = true;\n                snapshot = new HashMap<>();\n                for (Map.Entry<Integer, Account> e : accounts.entrySet()) {\n                    snapshot.put(e.getKey(), e.getValue().copy());\n                }\n            } else if (cmd.equals(\"TRANSFER\")) {\n                int fromId = sc.nextInt();\n                int toId = sc.nextInt();\n                int amt = sc.nextInt();\n\n                if (inTransaction && amt > 0 && accounts.containsKey(fromId) && accounts.containsKey(toId)) {\n                    Account fromAcc = accounts.get(fromId);\n                    Account toAcc = accounts.get(toId);\n                    if (fromAcc.balance >= amt) {\n                        fromAcc.balance -= amt;\n                        toAcc.balance += amt;\n                    }\n                }\n            } else if (cmd.equals(\"COMMIT\")) {\n                if (inTransaction) {\n                    inTransaction = false;\n                    snapshot = null;\n                }\n            } else if (cmd.equals(\"ROLLBACK\")) {\n                if (inTransaction) {\n                    accounts = snapshot;\n                    inTransaction = false;\n                    snapshot = null;\n                }\n            }\n        }\n\n        for (int id : order) {\n            Account a = accounts.get(id);\n            if (a != null) {\n                System.out.println(a.id + \" \" + a.owner + \" \" + a.balance);\n            }\n        }\n    }\n}",
    "hints": [
      {
        "title": "Deep Copy Snapshot",
        "text": "When BEGIN is called, create deep copies of all accounts into a snapshot map. On ROLLBACK, restore the accounts map from this snapshot."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "4\n101 Alice 5000\n102 Bob 3000\n103 Charlie 2000\n104 David 1000\n4\nBEGIN\nTRANSFER 101 102 1000\nTRANSFER 103 104 500\nCOMMIT",
        "expected": "101 Alice 4000\n102 Bob 4000\n103 Charlie 1500\n104 David 1500",
        "explanation": "1000 transferred from 101 to 102, 500 from 103 to 104, committed successfully."
      },
      {
        "id": 2,
        "input": "2\n101 Alice 5000\n102 Bob 3000\n4\nBEGIN\nTRANSFER 101 102 2000\nROLLBACK\nCOMMIT",
        "expected": "101 Alice 5000\n102 Bob 3000",
        "explanation": "Transfer was rolled back, balances reverted to original state."
      }
    ],
    "edgeCases": [
      {
        "id": 3,
        "input": "2\n101 Alice 100\n102 Bob 500\n3\nBEGIN\nTRANSFER 101 102 200\nCOMMIT",
        "expected": "101 Alice 100\n102 Bob 500",
        "explanation": "Insufficient balance (100 < 200), transfer ignored."
      }
    ]
  },
  "q94_st2_regional_sales_summary_collectors": {
    "num": "94",
    "id": "q94_st2_regional_sales_summary_collectors",
    "title": "Regional Sales Summary with Collectors",
    "tag": "Stream Collectors & Aggregations",
    "category": "ST2 Questions",
    "language": "java",
    "subtitle": "Filter by Threshold and Group Sales by Region with Count and Total Amount",
    "brief": "A retail company stores sales transactions containing a region, product name, and sale amount. Management wants a regional summary, but only sales meeting a minimum threshold should be considered.\n\nUsing the Java Stream API, process transactions and generate a summary for every region that has at least one qualifying sale:\n- Filter out sales whose amount is below the threshold.\n- Group remaining sales by region using a Collector.\n- For each region, calculate the number of qualifying sales and their total sales amount.\n- Display regions in alphabetical order.\n- If no sale qualifies, print `NO SALES`.\n\nConstraints:\n1 <= N <= 1000\n0 <= amount <= 1000000\n0 <= threshold <= 1000000",
    "inputFormat": "First line: integer N followed by minimum sale amount as decimal.\nNext N lines: region productName amount",
    "outputFormat": "For each qualifying region: Region Count TotalAmount (formatted to two decimal places), or NO SALES.",
    "starterCode": "import java.util.*;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Process sales with Java Stream API and Collectors\n    }\n}",
    "solutionCode": "import java.util.*;\nimport java.util.stream.Collectors;\n\nclass Sale {\n    String region;\n    String product;\n    double amount;\n\n    public Sale(String region, String product, double amount) {\n        this.region = region;\n        this.product = product;\n        this.amount = amount;\n    }\n}\n\nclass RegionStats {\n    long count = 0;\n    double total = 0.0;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        double threshold = sc.nextDouble();\n\n        List<Sale> sales = new ArrayList<>();\n        for (int i = 0; i < n; i++) {\n            String reg = sc.next();\n            String prod = sc.next();\n            double amt = sc.nextDouble();\n            if (amt >= threshold) {\n                sales.add(new Sale(reg, prod, amt));\n            }\n        }\n\n        if (sales.isEmpty()) {\n            System.out.println(\"NO SALES\");\n            return;\n        }\n\n        Map<String, RegionStats> map = new TreeMap<>();\n        for (Sale s : sales) {\n            RegionStats stat = map.computeIfAbsent(s.region, k -> new RegionStats());\n            stat.count++;\n            stat.total += s.amount;\n        }\n\n        for (Map.Entry<String, RegionStats> entry : map.entrySet()) {\n            System.out.printf(Locale.US, \"%s %d %.2f\\n\", entry.getKey(), entry.getValue().count, entry.getValue().total);\n        }\n    }\n}",
    "hints": [
      {
        "title": "Grouping and Totals",
        "text": "Collect qualifying sales into a sorted TreeMap or stream collector to compute count and sum per region."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "6\n1000\nNorth Laptop 1200\nSouth Phone 1500\nNorth Mouse 800\nEast Keyboard 2000\nSouth Tablet 1100\nWest Monitor 900",
        "expected": "East 1 2000.00\nNorth 1 1200.00\nSouth 2 2600.00",
        "explanation": "Sales >= 1000 are North (1200), South (1500), East (2000), South (1100). Grouped alphabetically: East, North, South."
      },
      {
        "id": 2,
        "input": "2\n2500\nNorth Laptop 1200\nSouth Phone 1500",
        "expected": "NO SALES",
        "explanation": "No sales reach 2500 threshold."
      }
    ],
    "edgeCases": [
      {
        "id": 3,
        "input": "1\n500\nCentral Desk 500",
        "expected": "Central 1 500.00",
        "explanation": "Boundary condition amount == threshold."
      }
    ]
  },
  "q95_st2_event_codes_most_frequent_value": {
    "num": "95",
    "id": "q95_st2_event_codes_most_frequent_value",
    "title": "Most Frequent Event Code with Byte-Buffered Input",
    "tag": "High-Volume Input & Frequency",
    "category": "ST2 Questions",
    "language": "java",
    "subtitle": "Find Most Frequent Integer with Smallest Value Tie-Breaker",
    "brief": "A competitive programming platform receives a large sequence of integer values representing event codes generated by a monitoring system.\n\nBecause the input can contain a large number of values, use buffered input to read values efficiently.\n\nDetermine:\n- The value that occurs most frequently.\n- Its frequency.\n- If multiple values have the same highest frequency, select the smallest value.\n- If N is 0, print `NO DATA`.\n\nConstraints:\n0 <= N <= 100000\n-100000 <= value <= 100000",
    "inputFormat": "Line 1: Integer N.\nLine 2: N integer values.",
    "outputFormat": "If N > 0: value frequency\nIf N = 0: NO DATA",
    "starterCode": "import java.io.*;\nimport java.util.*;\n\nclass Main {\n    public static void main(String[] args) throws IOException {\n        // Read values efficiently using BufferedReader, compute most frequent with smallest tie-breaker\n    }\n}",
    "solutionCode": "import java.io.*;\nimport java.util.*;\n\nclass Main {\n    public static void main(String[] args) throws IOException {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line1 = br.readLine();\n        if (line1 == null || line1.trim().isEmpty()) {\n            System.out.println(\"NO DATA\");\n            return;\n        }\n        int n = Integer.parseInt(line1.trim());\n        if (n == 0) {\n            System.out.println(\"NO DATA\");\n            return;\n        }\n        String line2 = br.readLine();\n        if (line2 == null) {\n            System.out.println(\"NO DATA\");\n            return;\n        }\n        String[] tokens = line2.trim().split(\"\\\\s+\");\n        Map<Integer, Integer> freq = new HashMap<>();\n        for (int i = 0; i < n && i < tokens.length; i++) {\n            int val = Integer.parseInt(tokens[i]);\n            freq.put(val, freq.getOrDefault(val, 0) + 1);\n        }\n\n        int maxFreq = -1;\n        int bestVal = Integer.MAX_VALUE;\n\n        for (Map.Entry<Integer, Integer> entry : freq.entrySet()) {\n            int val = entry.getKey();\n            int f = entry.getValue();\n            if (f > maxFreq) {\n                maxFreq = f;\n                bestVal = val;\n            } else if (f == maxFreq) {\n                if (val < bestVal) {\n                    bestVal = val;\n                }\n            }\n        }\n\n        System.out.println(bestVal + \" \" + maxFreq);\n    }\n}",
    "hints": [
      {
        "title": "Tie-breaking",
        "text": "Track <code>maxFreq</code> and <code>bestVal</code>. When <code>f == maxFreq</code>, choose <code>Math.min(bestVal, val)</code>."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "10\n4 7 4 2 7 4 9 2 7 7",
        "expected": "7 4",
        "explanation": "7 appears 4 times (highest frequency)."
      },
      {
        "id": 2,
        "input": "0",
        "expected": "NO DATA",
        "explanation": "N = 0."
      }
    ],
    "edgeCases": [
      {
        "id": 3,
        "input": "4\n5 2 5 2",
        "expected": "2 2",
        "explanation": "Tie between 2 and 5 (both count 2), select smallest (2)."
      }
    ]
  },
  "q96_st2_city_weather_logs_streams": {
    "num": "96",
    "id": "q96_st2_city_weather_logs_streams",
    "title": "City Weather Logs Processing with Streams",
    "tag": "Java Streams API",
    "category": "ST2 Questions",
    "language": "java",
    "subtitle": "Threshold Filtering, Max Temp, Average & Non-Map Weather Condition Counts",
    "brief": "Write a Java Stream application to process city weather logs. Each weather record contains a reading ID, city name, weather condition, and recorded temperature in Celsius.\n\nOperations:\n1. Print all weather records whose temperature is strictly greater than the given temperature threshold, in original input order (readingId cityName temperature-as-integer).\n2. Find and print the weather record with the maximum recorded temperature.\n3. Calculate and print the overall average temperature rounded to 2 decimal places.\n4. Print the total number of records for each weather condition in alphabetical order without using any Map implementation.\n\nConstraints:\n1 <= N <= 1000\n-100 <= temperature <= 100\n-100 <= threshold <= 100",
    "inputFormat": "Line 1: Integer N.\nNext N lines: readingId cityName weatherCondition temperature\nLast line: Temperature threshold.",
    "outputFormat": "Sections:\nReadings Above Threshold\n<records>\nHighest Temperature Reading\n<record>\nAverage Temperature : X.XX\nWeather Condition Counts\n<condition count>",
    "starterCode": "import java.util.*;\nimport java.util.stream.Collectors;\n\nclass WeatherRecord {\n    int readingId;\n    String cityName;\n    String weatherCondition;\n    double temperature;\n\n    public WeatherRecord(int readingId, String cityName, String weatherCondition, double temperature) {\n        this.readingId = readingId;\n        this.cityName = cityName;\n        this.weatherCondition = weatherCondition;\n        this.temperature = temperature;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Process city weather records with Java Streams\n    }\n}",
    "solutionCode": "import java.util.*;\nimport java.util.stream.Collectors;\n\nclass WeatherRecord {\n    int readingId;\n    String cityName;\n    String weatherCondition;\n    double temperature;\n\n    public WeatherRecord(int readingId, String cityName, String weatherCondition, double temperature) {\n        this.readingId = readingId;\n        this.cityName = cityName;\n        this.weatherCondition = weatherCondition;\n        this.temperature = temperature;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        List<WeatherRecord> records = new ArrayList<>();\n        for (int i = 0; i < n; i++) {\n            int id = sc.nextInt();\n            String city = sc.next();\n            String cond = sc.next();\n            double temp = sc.nextDouble();\n            records.add(new WeatherRecord(id, city, cond, temp));\n        }\n        double threshold = sc.nextDouble();\n\n        System.out.println(\"Readings Above Threshold\");\n        records.stream()\n            .filter(r -> r.temperature > threshold)\n            .forEach(r -> System.out.println(r.readingId + \" \" + r.cityName + \" \" + (int)r.temperature));\n\n        System.out.println(\"Highest Temperature Reading\");\n        WeatherRecord highest = null;\n        for (WeatherRecord r : records) {\n            if (highest == null || r.temperature > highest.temperature) {\n                highest = r;\n            }\n        }\n        if (highest != null) {\n            System.out.println(highest.readingId + \" \" + highest.cityName + \" \" + (int)highest.temperature);\n        }\n\n        double avg = records.stream().mapToDouble(r -> r.temperature).average().orElse(0.0);\n        System.out.printf(Locale.US, \"Average Temperature : %.2f\\n\", avg);\n\n        System.out.println(\"Weather Condition Counts\");\n        List<String> conditions = records.stream().map(r -> r.weatherCondition).distinct().sorted().collect(Collectors.toList());\n        for (String c : conditions) {\n            long count = records.stream().filter(r -> r.weatherCondition.equals(c)).count();\n            System.out.println(c + \" \" + count);\n        }\n    }\n}",
    "hints": [
      {
        "title": "No Map Requirement",
        "text": "Extract distinct sorted weather conditions using Streams, then count matching records for each condition."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "6\n101 Delhi Sunny 35.5\n102 Mumbai Rainy 28.0\n103 Chandigarh Sunny 31.25\n104 Amritsar Cloudy 38.75\n105 Delhi Rainy 24.5\n106 Ludhiana Sunny 40.5\n30",
        "expected": "Readings Above Threshold\n101 Delhi 35\n103 Chandigarh 31\n104 Amritsar 38\n106 Ludhiana 40\nHighest Temperature Reading\n106 Ludhiana 40\nAverage Temperature : 33.08\nWeather Condition Counts\nCloudy 1\nRainy 2\nSunny 3",
        "explanation": "Readings > 30 listed. Ludhiana has highest temp (40.5). Average is 33.08. Conditions: Cloudy 1, Rainy 2, Sunny 3."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "1\n200 Shimla Snow -5.0\n0",
        "expected": "Readings Above Threshold\nHighest Temperature Reading\n200 Shimla -5\nAverage Temperature : -5.00\nWeather Condition Counts\nSnow 1",
        "explanation": "Negative temperature handling."
      }
    ]
  },
  "q97_st2_box_office_movie_records_streams": {
    "num": "97",
    "id": "q97_st2_box_office_movie_records_streams",
    "title": "Box Office Movie Records with Streams",
    "tag": "Java Streams API",
    "category": "ST2 Questions",
    "language": "java",
    "subtitle": "Revenue Threshold, Highest Earning Movie, Average Revenue & Language Counts",
    "brief": "Write a Java Stream application to process box office movie records. Each movie contains ID, title, language, and collection revenue.\n\nOperations:\n1. Display all movies whose collection revenue is strictly greater than the threshold (ID Title Language Revenue). If no movie qualifies, display `No movies above threshold`.\n2. Display the movie with the highest collection revenue.\n3. Calculate and display the average collection revenue across all movies, rounded to 2 decimal places.\n4. Count the number of movies for each language and display the counts in alphabetical order of language.\n\nConstraints:\n1 <= N <= 100\n1 <= Revenue <= 100000000",
    "inputFormat": "Line 1: Integer N.\nNext N lines: ID Title Language Revenue\nLast line: Revenue threshold.",
    "outputFormat": "Sections:\nMovies Above Threshold\n<movies or 'No movies above threshold'>\nHighest Earning Movie\n<movie>\nAverage Revenue : X.XX\nLanguage Counts\n<language count>",
    "starterCode": "import java.util.*;\nimport java.util.stream.Collectors;\n\nclass Movie {\n    int id;\n    String title;\n    String language;\n    double revenue;\n\n    public Movie(int id, String title, String language, double revenue) {\n        this.id = id;\n        this.title = title;\n        this.language = language;\n        this.revenue = revenue;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Process movie records using Java Streams API\n    }\n}",
    "solutionCode": "import java.util.*;\nimport java.util.stream.Collectors;\n\nclass Movie {\n    int id;\n    String title;\n    String language;\n    double revenue;\n\n    public Movie(int id, String title, String language, double revenue) {\n        this.id = id;\n        this.title = title;\n        this.language = language;\n        this.revenue = revenue;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        List<Movie> movies = new ArrayList<>();\n        for (int i = 0; i < n; i++) {\n            int id = sc.nextInt();\n            String title = sc.next();\n            String lang = sc.next();\n            double rev = sc.nextDouble();\n            movies.add(new Movie(id, title, lang, rev));\n        }\n        double threshold = sc.nextDouble();\n\n        System.out.println(\"Movies Above Threshold\");\n        List<Movie> above = movies.stream().filter(m -> m.revenue > threshold).collect(Collectors.toList());\n        if (above.isEmpty()) {\n            System.out.println(\"No movies above threshold\");\n        } else {\n            for (Movie m : above) {\n                if (m.revenue == (long) m.revenue) {\n                    System.out.println(m.id + \" \" + m.title + \" \" + m.language + \" \" + (long)m.revenue);\n                } else {\n                    System.out.println(m.id + \" \" + m.title + \" \" + m.language + \" \" + m.revenue);\n                }\n            }\n        }\n\n        System.out.println(\"Highest Earning Movie\");\n        Movie highest = null;\n        for (Movie m : movies) {\n            if (highest == null || m.revenue > highest.revenue) {\n                highest = m;\n            }\n        }\n        if (highest != null) {\n            if (highest.revenue == (long) highest.revenue) {\n                System.out.println(highest.id + \" \" + highest.title + \" \" + highest.language + \" \" + (long)highest.revenue);\n            } else {\n                System.out.println(highest.id + \" \" + highest.title + \" \" + highest.language + \" \" + highest.revenue);\n            }\n        }\n\n        double avg = movies.stream().mapToDouble(m -> m.revenue).average().orElse(0.0);\n        System.out.printf(Locale.US, \"Average Revenue : %.2f\\n\", avg);\n\n        System.out.println(\"Language Counts\");\n        List<String> langs = movies.stream().map(m -> m.language).distinct().sorted().collect(Collectors.toList());\n        for (String l : langs) {\n            long count = movies.stream().filter(m -> m.language.equals(l)).count();\n            System.out.println(l + \" \" + count);\n        }\n    }\n}",
    "hints": [
      {
        "title": "Displaying Numbers Cleanly",
        "text": "If revenue is a whole number, cast to long for printing to match sample formatting."
      }
    ],
    "sampleCases": [
      {
        "id": 1,
        "input": "3\n1 Avatar English 2000\n2 RRR Telugu 1200\n3 Inception English 800\n1000",
        "expected": "Movies Above Threshold\n1 Avatar English 2000\n2 RRR Telugu 1200\nHighest Earning Movie\n1 Avatar English 2000\nAverage Revenue : 1333.33\nLanguage Counts\nEnglish 2\nTelugu 1",
        "explanation": "Avatar (2000) and RRR (1200) > 1000. Avatar is highest. Average is 1333.33. English: 2, Telugu: 1."
      }
    ],
    "edgeCases": [
      {
        "id": 2,
        "input": "1\n1 Short Hindi 500\n1000",
        "expected": "Movies Above Threshold\nNo movies above threshold\nHighest Earning Movie\n1 Short Hindi 500\nAverage Revenue : 500.00\nLanguage Counts\nHindi 1",
        "explanation": "No movies above threshold."
      }
    ]
  }
};
