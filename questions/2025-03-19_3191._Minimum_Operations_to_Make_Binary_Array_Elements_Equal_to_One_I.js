/**
     * Question: 3191. Minimum Operations to Make Binary Array Elements Equal to One I
     * Description: You are given a binary array nums.

You can do the following operation on the array any number of times (possibly zero):

Choose any 3 consecutive elements from the array and flip all of them.
Flipping an element means changing its value from 0 to 1, and from 1 to 0.

Return the minimum number of operations required to make all elements in nums equal to 1. If it is impossible, return -1.

 
     */
    #include<algorithm>
class Solution {
public:
    void solve(vector<int>& nums , int index){
        int n = nums.size();
        int size = min(n , index+3);
        for(int i = index ; i < size ; i++){
            if(nums[i] == 0) nums[i] = 1;
            else nums[i]=0;
        }
    }
    int minOperations(vector<int>& nums) {
        int count = 0;
        int n = nums.size();
        for(int i = 0 ; i < n-2 ; i++){
            if(nums[i] == 0){
                solve(nums , i);
                count++;
            }
        }
        for(auto it : nums){
            if(it == 0) return -1;
        }
        return count ;
    }
};