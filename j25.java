import java.util.Scanner;
public class j25{
    public static void main(){
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter your name");
        String name=sc.nextLine();
        int age=17;
        IO.println("Hello,Samarth Joshi");
        IO.println("Your name is"+ name +"."+"your age is"+ age);
        Integer a=200;
        Integer b=200;//the box y is created in stack but it stored adress of memory that stores the value 10
        System.out.println(a==b);
    for(int i=1;i<=18;i++){
        System.out.println(i);
        try{
            Thread.sleep(2000);
        }catch(InterruptedException e){
            System.out.println("Interruption occured!");
            break;
        }
    }
    }
}