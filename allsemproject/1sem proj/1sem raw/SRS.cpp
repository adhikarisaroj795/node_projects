#include<stdio.h>
#include<conio.h>
#include<string.h>
#include<stdlib.h>

////functions..
void menu();
void new_entry();
void update();
void view_list_all();
void view_list_one();
void del();
void close();
int pass();


struct date
 {
    int month,day,year;
 };
struct record
 {
    char name[60];
    int age;
    char city[60];
    char mail_id[30];
    char room_no[8];
    char father_name[60];
    int father_phone;
    int phone;
    char hostel_name[6];
    char roll_no[10];
    struct date
    	{
    		int month;
    		int day;
    		int year;
		}dob;
  }add,upd,check,rem,sort;
  
//global variables
int main_exit;
  
  
//password ko lagi..
int main()
{
	pass();  
    menu();
  return 0;
}

  
void menu()
{
	//displaying list
	system("CLS");
    int choice;
	printf("\t\t\t\t************************************\n");
	printf("\t\t\t\t         Student Record System");
	printf("\n\t\t\t\t************************************\n\n");
	printf("\t\t\t\t            MAIN MENU");
	printf("\n\t\t\t\t       *****************");
	printf("\n\t\t\t\t           1.Enter new record.");
	printf("\n\t\t\t\t           2.Update record.");
	printf("\n\t\t\t\t           3.View all records.");
	printf("\n\t\t\t\t           4.View record of any one.");
	printf("\n\t\t\t\t           5.Delete record.");
	printf("\n\t\t\t\t           6.Exit.");
	printf("\n\n\t\t\t\t         Enter your choice:");
	scanf("%d",&choice);
	switch(choice)
    {

        case 1:new_entry();
        break;
        case 2:update();
        break;
        case 3:view_list_all();
        break;
        case 4:view_list_one();
        break;
        case 5:del();
        break;
        case 6:close();
        break;
        default:menu();
        break;
    }
}
//to enter new record    
void new_entry()
{
	system("CLS");
    int choice;
    FILE *ptr;

    ptr=fopen("record.txt","a+");
    
	new_entry:   
    printf("\t\nADD STUDENTS DATA \n");
    printf("*******************************\n \n");
    printf("\nEnter your roll number:");
    scanf("%s",check.roll_no);
    while(fscanf(ptr,"%s %s %d/%d/%d %d %s %d %s %s %d %s %s\n",add.roll_no, add.name, &add.dob.month, &add.dob.day, &add.dob.year, &add.age, add.city, &add.phone, add.mail_id, add.father_name, &add.father_phone, add.room_no)!=EOF)
    {
        if (strcmp(check.roll_no,add.roll_no)==0)
            {printf("Students roll no. already in use!");
             goto new_entry;
        }
    }

    strcpy(add.roll_no,check.roll_no);
    
    
    printf("Enter Name:");
    scanf("%s",add.name);
    printf("Enter age:");
    scanf("%d",&add.age);
    printf("Enter Phone No:");
    scanf("%d",&add.phone);
    printf("Enter City:");
    scanf("%s",add.city);
    printf("Enter E-mail:");
    scanf("%s",add.mail_id);
    printf("Enter Room No:");
    scanf("%s",add.room_no);
    printf("Enter Father's Name:");
    scanf("%s",add.father_name);
    printf("Enter Father's Phone Number':");
    scanf("%d",&add.father_phone);
    printf("Enter Date Of Birth(mm/dd/yyyy):");
    scanf("%d/%d/%d",&add.dob.month,&add.dob.day,&add.dob.year);
    fprintf(ptr,"%s %s %d %d %s %s %s %s %d %d/%d/%d\n",add.roll_no, add.name, add.age, add.phone, add.city, add.mail_id, add.room_no, add.father_name, add.father_phone, add.dob.month, add.dob.day, add.dob.year );
    fclose(ptr);
    printf("\nStudent added successfully!");
    
	label_1:
    printf("\n\n\n\t\tEnter 1 to go to the main menu and 0 to exit:");
    scanf("%d",&main_exit);
    
    if (main_exit==1)
    	menu();
    else if(main_exit==0)
        close();
    else
        {
            printf("\nInvalid!\a");
            goto label_1;
        }
} 

//update student info
void update()
{
	system("CLS");
    int choice,test=0;
    FILE *old,*newrec;
    old=fopen("record.txt","r");
    newrec=fopen("new.txt","w");

    printf("\nEnter the roll no. of the student whose info you want to change:");
    scanf("%s",upd.roll_no);
    while(fscanf(old,"%s %s %d %d %s %s %s %s %d %d/%d/%d\n",add.roll_no, add.name, &add.age, &add.phone, add.city, add.mail_id, add.room_no, add.father_name, &add.father_phone, &add.dob.month, &add.dob.day, &add.dob.year )!=EOF)

    {
        if (strcmp(add.roll_no,upd.roll_no)==0)
        {   
			test=1;
            printf("\nWhich information do you want to change?\n1.Room no.\n2.Phone\n\nEnter your choice(1 for room no. and 2 for phone ):");
            scanf("%d",&choice);
            
            if(choice==1)
                {printf("Enter the new room no.:");
                scanf("%s",upd.room_no);
                fprintf(newrec,"%s %s %d %d %s %s %s %s %d %d/%d/%d\n",add.roll_no, add.name, add.age, add.phone, add.city, add.mail_id, upd.room_no, add.father_name, add.father_phone, add.dob.month, add.dob.day, add.dob.year );
                printf("Changes saved!");
                }
            else if(choice==2)
                {
                printf("Enter the new phone number:");
                scanf("%d",&upd.phone);
                fprintf(newrec,"%s %s %d %d %s %s %s %s %d %d/%d/%d\n",add.roll_no, add.name, add.age, upd.phone, add.city, add.mail_id, add.room_no, add.father_name, add.father_phone, add.dob.month, add.dob.day, add.dob.year );
                printf("Changes saved!");
                }

        }
        else
            fprintf(newrec,"%s %s %d %d %s %s %s %s %d %d/%d/%d\n",add.roll_no, add.name, add.age, add.phone, add.city, add.mail_id, add.room_no, add.father_name, add.father_phone, add.dob.month, add.dob.day, add.dob.year );
    }
    fclose(old);
    fclose(newrec);
    remove("record.txt");
    rename("new.txt","record.txt");

	if(test!=1)
        printf("\nRecord not found!!\a\a\a");
    
    edit_invalid:
		printf("\nEnter 0 to try again,1 to return to main menu and 2 to exit:");
        scanf("%d",&main_exit);  
        if (main_exit==1)
			menu();
        else if (main_exit==2)
            close();
        else if(main_exit==0)
            update();
        else
        {
        	printf("\nInvalid!\a");
            goto edit_invalid;
        }
       
}

//view record of all student 
void view_list_all()
{
	system("CLS");
    FILE *all;
    all=fopen("record.txt","r");
    int test=0;
    
    printf("\nROLL NO.\tNAME\t\t\tcity\t\t\tPHONE\n");

    while(fscanf(all,"%s %s %d %d %s %s %s %s %d %d/%d/%d\n",add.roll_no, add.name, &add.age, &add.phone, add.city, add.mail_id, add.room_no, add.father_name, &add.father_phone, &add.dob.month, &add.dob.day, &add.dob.year )!=EOF)
       {
           printf("\n%s\t\t %s\t\t\t%s\t\t\t%d",add.roll_no,add.name,add.city,add.phone);
           test++;
       }
    fclose(all);
    
    if (test==0)
        {   
            printf("\nNO RECORDS!!\n");}

    view_list:
     printf("\n\nEnter 1 to go to the main menu and 0 to exit:");
        scanf("%d",&main_exit);
        
        if (main_exit==1)
            menu();
        else if(main_exit==0)
            close();
        else
        {
            printf("\nInvalid!\a");
            goto view_list;
        }
    
}
//view all data of 1 student...
void view_list_one()
{
	system("CLS");
    FILE *ptr;
    int test=0;
    int choice;
    ptr=fopen("record.txt","r");
    printf("Do you want to check by\n1.Roll no\n2.Name\nEnter your choice:");
    scanf("%d",&choice);
    if (choice==1)
    {   printf("\n\nEnter the roll number:");
        scanf("%s",check.roll_no);

        while (fscanf(ptr,"%s %s %d %d %s %s %s %s %d %d/%d/%d\n",add.roll_no, add.name, &add.age, &add.phone, add.city, add.mail_id, add.room_no, add.father_name, &add.father_phone, &add.dob.month, &add.dob.day, &add.dob.year )!=EOF)
        {
            if(strcmp(add.roll_no,check.roll_no)==0)
            {   
                test=1;

                printf("\nROLL NO.:%s\nName:%s \nDOB:%d/%d/%d \nAge:%d \ncity:%s \nPhone number:%d \nE-Mail id:%s \nFather's name:%s \n Father's Phone No.:%d \nRoom No:%s \n",add.roll_no, add.name, add.dob.month, add.dob.day, add.dob.year, add.age, add.city, add.phone, add.mail_id, add.father_name, add.father_phone, add.room_no);
            }
        }
    }
    else if (choice==2)
    {   printf("\n\nEnter the name:");
        scanf("%s",check.name);
        while (fscanf(ptr,"%s %s %d %d %s %s %s %s %d %d/%d/%d\n",add.roll_no, add.name, &add.age, &add.phone, add.city, add.mail_id, add.room_no, add.father_name, &add.father_phone, &add.dob.month, &add.dob.day, &add.dob.year )!=EOF)
        {
            if(strcmp(add.name,check.name)==0)
            {   
                test=1;
                printf("\nROLL NO.:%s\nName:%s \nDOB:%d/%d/%d \nAge:%d \ncity:%s \nPhone number:%d \nE-Mail id:%s \nFather's name:%s \n Father's Phone No.:%d \nRoom No:%s \nHostel:%s \n",add.roll_no, add.name, add.dob.month, add.dob.day, add.dob.year, add.age, add.city, add.phone, add.mail_id, add.father_name, add.father_phone, add.room_no);
            }
        }
    }

    fclose(ptr);
     if(test!=1)
     	printf("\nRecord not found!!\a\a\a");
    	view_one_invalid:    
        printf("\nEnter 0 to try again,1 to return to main menu and 2 to exit:");
        scanf("%d",&main_exit);
        if (main_exit==1)
            menu();
        else if (main_exit==2)
            close();
        else if(main_exit==0)
            view_list_one();
        else
        {	
        	printf("\nInvalid!\a");
            goto view_one_invalid;
		}
}

//delete record
void del()
{
	system("CLS");
    FILE *prev,*newrecord;
    int test=0;
    prev=fopen("record.txt","w");
    newrecord=fopen("new.txt","wb");
    printf("Enter the roll no. of student whose data you want to delete the data:");
    scanf("%s",&rem.roll_no);
    while (fscanf(prev,"%s %s %d %d %s %s %s %s %d %d/%d/%d\n",add.roll_no, add.name, &add.age, &add.phone, add.city, add.mail_id, add.room_no, add.father_name, add.father_phone, &add.dob.month, &add.dob.day, &add.dob.year )!=EOF)
   {
        if(add.roll_no!=rem.roll_no)
        {
        	fprintf(newrecord,"%s %s %d %d %s %s %s %s %d %d/%d/%d\n",add.roll_no, add.name, add.age, add.phone, add.city, add.mail_id, add.room_no, add.father_name, add.father_phone, add.dob.month, add.dob.day, add.dob.year );
		}
            

        else
            {
			test++;
            printf("\nRecord deleted successfully!\n");
            }
    }
    fclose(prev);
    fclose(newrecord);
    remove("record.txt");
    rename("new.txt","record.txt");
    if(test==0)
    {
    	printf("\nRecord not found!!\a\a\a");
	}
	    
    	del_invalid:
        printf("\nEnter 0 to try again,1 to return to main menu and 2 to exit:");
        scanf("%d",&main_exit);
        if (main_exit==1)
            menu();
        else if (main_exit==2)
            close();
        else if(main_exit==0)
            del();
        else
        {	
        	printf("\nInvalid!\a");
            goto del_invalid;
		}
}

//showing program detail
void close()
{
	system("CLS");
    printf("\n\n\n\nProgram by Manoram\n\n\n");
    exit(0);
}
//password login
int pass(void)
{
   int a=1,i=0;
    char uname[10],c=' '; 
    char pword[10],code[10];
    char user[10]="user";
    char pass[10]="pokhara";
    do
	{
	system("cls");
	
    printf("\n  **************************  LOGIN TO CONTINUE  **************************  ");
    printf(" \nENTER USERNAME:-");
	scanf("%s", &uname); 
	printf(" \nENTER PASSWORD:-");
	while(i<10)
	{
	    pword[i]=getch();
	    c=pword[i];
	    if(c==13) break;
	    else printf("*");
	    i++;
	}
	pword[i]='\0';
	i=0;
	
		if(strcmp(uname,user)==0 && strcmp(pword,pass)==0)
			{
				printf("\nSucessfully Logged In");
				menu();
			}
		else
		{
			printf("\nWrong Password, try again");
            getch();
            a++;
		}
		if(a>5){
          printf("\nAccess Denied");
          exit(0);
          
          }

       }while (a<=5);

}



	

