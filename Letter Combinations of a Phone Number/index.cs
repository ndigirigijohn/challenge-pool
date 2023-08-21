/*Incomplete*/
using System;
using System.Collections.Generic;

class Program
{
    static string[] lettersContainer = new string[]
    {
        "abc",
        "def",
        "ghi",
        "jkl",
        "mno",
        "pqrs",
        "tuv",
        "wxyz"
    };

    static List<string> LetterCombinationsFunc(string digits)
    {
        List<string> result = new List<string>();
        if (digits.Length == 0) return result;

        void Dfs(int index, string path)
        {
            if (index == digits.Length)
            {
                result.Add(path);
                return;
            }

            string letters = lettersContainer[digits[index] - '2'];
            foreach (char letter in letters)
            {
                Dfs(index + 1, path + letter);
            }
        }

        Dfs(0, "");
        return result;
    }

    static void Main(string[] args)
    {
        List<string> combinations = LetterCombinationsFunc("23");
        foreach (string combination in combinations)
        {
            Console.WriteLine(combination);
        }
    }
}
