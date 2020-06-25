import java.math.BigInteger;
 public class Euler57 { 
public static void main(String[] args) { 
qualifyingFractionChecker();
 }
 public static void qualifyingFractionChecker() { 
int counter = 0;
 BigInteger firstNumerator = BigInteger.ONE;
 BigInteger firstDenominator = BigInteger.ONE;
 BigInteger numerator = new BigInteger("3");
 BigInteger denominator = BigInteger.TWO;
 BigInteger numeratorCopy = BigInteger.ZERO;
 BigInteger denominatorCopy = BigInteger.ZERO; 
for (int i = 1; i <= 1000; i++) {
 if (numberOfDigits(numerator) > numberOfDigits(denominator)) { counter++;
 System.out.println("top: " + numerator + "; " + denominator);
 } 
numeratorCopy = numerator;
 denominatorCopy = denominator; 
numerator = numerator.multiply(BigInteger.TWO).add(firstNumerator); denominator = denominator.multiply(BigInteger.TWO).add(firstDenominator); firstNumerator = numeratorCopy;
 firstDenominator = denominatorCopy;
 }
 System.out.println("counter: " + counter);
 }
 public static int numberOfDigits(BigInteger n) {
 return n.toString().length(); 
}
 }
