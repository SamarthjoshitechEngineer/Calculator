import java.util.Scanner;
public class Recursion{
     static int[]dp;
    public static int fibo(int n){
if(n<=1) return n;
if(dp[n]!=-1) return dp[n];
 int ans=fibo(n-1)+fibo(n-2);
 dp[n]=ans;
 return ans;
}
    public static void main(String[]args){
        Scanner sc =new Scanner(System.in);
        System.out.println("Enter a number");
int n=sc.nextInt();
dp=new int[n+1];
for(int i=0;i<=n;i++){
dp[i]=-1;
}
System.out.print("The"+n+"th Fibonacci is"+fibo(n));
    }
}

