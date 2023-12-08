ASCII-Encode Strings

Many simple encoding methods have been devised over the years. A common method is the ASCII character set used to display characters on the screen. Each character is given a numerical value which can be interpreted by the computer.

To decode the string, first reverse the string of digits, then successively pick valid values from the string and convert them to their ASCII equivalents. some of the value will have two digits, and others three. use the ranges of valid values when decoding the string of digits.

For reference, the characters in s corresponding to the following ASCII values:

the value range for A through Z is 65 through 90.
the value range for a through z is 97 through 122.
the value of the space character is 32.


Given a string, decode it following the steps mentioned above.

Example.

The table below shows the conversion from the string HackerRank to the ASCII string 729799107101114328297110107:

Character: H a c k e r R a n k
ASCII value: 72 97 99 107 101 114 82 87 110 107

The last step of the encoding is to revers the ASCII string: 7010117928411101701997927.

To decode the string, first reverse the string of digits, then successively pick valid values from the string and convert the, to their ASCII equivalents. Some of the values will have two digits, and others three. use the ranges of valid values when decoding the string of digits.

Function description
Complete the function decode in the editor below.

decode has the following parameters(s):
String encoded: an encoded string

Returns:
string: the original decoded string

Constraints

1 <= |s| <= 10^5
s[i] is an ascii character in the range [A-Za-z] or a space character

