public class Sol8 {
    public static void main(String[] args){
        System.out.println(myAtoi("42"));
        System.out.println(myAtoi("     -42"));
        System.out.println(myAtoi("4193 with words"));
    }

    public static int myAtoi(String s){
        int num = 0;
        Boolean isPositive = true;
        Boolean isNumStarted = false;
        for(int index = 0 ; index < s.length(); index++){

        }
        return isPositive ? num : num * -1;
    }
}
