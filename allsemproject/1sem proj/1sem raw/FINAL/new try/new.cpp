#include<stdio.h>
#include<conio.h>
#include<string.h>
#include<stdlib.h>

////functions..
void menu();
void new_entry();
void update();
void view_list_all();
void del();
void close();
int pass();

struct student{
    char id[15];
    char name[20];
    char address[20];
    char parent_name[20];
    int Class;
    long unsigned int phone_no;
}stu;

//password ko lagi..
int main()
{
	pass();  
    menu();
   return 0 ;
}

//global
int main_exit;

  
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
	printf("\n\t\t\t\t           3.View records.");
	printf("\n\t\t\t\t           4.Delete record");
	printf("\n\t\t\t\t           5.Exit");
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
        case 4:del();
        break;
        case 5:close();
        break;
        default:menu();
        break;
    }
}

//add new record
void new_entry()
{
	system("CLS");
    FILE *ptr;

    ptr=fopen("record.txt","a+");
    
	new_entry:   
    printf("\t\nADD STUDENTS DATA \n");
    printf("*******************************\n \n");
    
	 if(ptr == NULL){
       printf("Error in Opening file");
	  }
	else{
        fflush(stdin);
        printf("ID: ");
		gets(stu.id);
        printf("Name: ");
		gets(stu.name);
        printf("Address: ");
		gets(stu.address);
        printf("Parent's name: ");
		gets(stu.parent_name);
        printf("Class: ");
		scanf("%d",&stu.Class);
        printf("Phone Number: ");
		scanf("%ld",&stu.phone_no);
        fwrite(&stu, sizeof(stu), 1, ptr);
        printf("The record is sucessfully added");
        getch();
    }
    fclose(ptr);
    label_1:
    printf("\n\n\n\t\tEnter 1 to go to the main menu:\n0 to exit::");
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

//update data
void update()
{
	system("CLS");
    int test= 0,ch;
    char s_id[15];
    printf("\t\nUPDATE STUDENTS DATA \n");
    printf("*******************************\n \n");
    printf("Enter ID to Update: ");
	fflush(stdin);
    gets(s_id);
    FILE *fp;
    FILE *ptr;
    fp = fopen("record.txt","r");
    ptr= fopen("text.txt","w");
    while(fread(&stu, sizeof(stu),1,fp))
	{
		{
			if(s_id!=stu.id)
			{
				fwrite(&stu, sizeof(stu),1,ptr);
			}
			else
			{
					printf("\nSelect any option to update::");
				    printf("\n\n\t1. Update Name");
				    printf("\n\t2. Update Address");	
				    printf("\n\t3. Update Parent's Name'");
				    printf("\n\t4. Update Class");
				    printf("\n\t5. Phone Number");
				    printf("\nEnter your choice:");
  					scanf("%d", &ch);
    				switch (ch)
					{
    					case 1:
						    printf("Enter Name:");
 						    scanf("%s", &stu.name);
 						    break;	
 						    
 							case 2:
						    printf("Enter Address:");
 						    scanf("%s", &stu.address);
 						    break;
 							
 							case 3:
						    printf("Enter Parent Name:");
 						    scanf("%s", &stu.parent_name);
 						    break;
 						    
 						    case 4:
						    printf("Enter Class:");
 						    scanf("%d", &stu.Class);
 						    break;
 						    
 						    case 5:
						    printf("Enter Phone Number:");
 						    scanf("%ld", &stu.phone_no);
 						    break;
 						    
 						        default:
   								printf("Invalid Selection");
  								break;
 						    
					}
					fwrite(&stu, sizeof(stu),1,ptr);
			}
			test = 1;
		}
		fclose(fp);
		fclose(ptr);
		remove("record.txt");
		rename("text.txt","record.txt");
		
      

    if(test!=1)
	{
       printf("No Record Found");
    }
    else
    {
    	printf("Record Updated");
	}
    fclose(fp);
        
		edit_invalid:
		printf("\n\nEnter 0 to try again:\n1 to return to main menu:\n2 to exit::");
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
}

//view all records
void view_list_all()
{
	system("CLS");
    char s_id[15];
    int test = 0;
    printf("\t\nVIEW ALL STUDENTS DATA \n");
    printf("*******************************\n \n");
    printf("Enter ID to Search: ");
	fflush(stdin);
    gets(s_id);
    FILE *fp;
    fp = fopen("record.txt","rb");
    while(fread(&stu,sizeof(stu),1,fp) == 1)
	{
        if(strcmp(s_id,stu.id) == 0)
		{
            test = 1;
            break;
        }
    }
    if(test == 1)
	{
        printf("The record is Found");
        printf("\n\nID: %s",stu.id);
        printf("\nName: %s",stu.name);
        printf("\nAddress: %s",stu.address);
        printf("\nParent's Name: %s",stu.parent_name);
        printf("\nClass: %d",stu.Class);
        printf("\nPhone No: %ld",stu.phone_no);
    }
	else
	{
        printf("Sorry, No record found in the database");
    }
     view_list:
     printf("\n\nEnter 1 to go to the main menu:\n0 to exit::");
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

//delete....

void del()
{
    system("CLS");
    char s_id[15];
    int test = 0;
    printf("\t\nDELETE STUDENTS DATA \n");
    printf("*******************************\n \n");
    printf("Enter ID to Modify: ");
	fflush(stdin);
    gets(s_id);
    FILE *fp, *temp;
    fp = fopen("record.txt","rb");
    temp = fopen("temp.txt", "wb");
    while(fread(&stu, sizeof(stu),1,fp) == 1)
	{
        if(strcmp(s_id, stu.id) != 0)
		{
            fwrite(&stu,sizeof(stu),1,temp);
        }
    }
    fclose(fp);
    fclose(temp);
    remove("record.txt");
    rename("temp.txt","record.txt");
    printf("The record is sucessfully deleted");
   
    del_invalid:
        printf("\nEnter 0 to try again:\n1 to return to main menu:\n2 to exit::");
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

//exit
void close()
{
	system("CLS");
    printf("\n\n\n\n**********Program by KIST**********\n\n\n");
    exit(0);
}

//password ko lagi...
int pass(void)
{
   int a=1,i=0;
    char uname[10],c=' '; 
    char pword[10],code[10];
    char user[10]="admin";
    char pass[10]="admin";
    do
	{
	system("cls");
	
    printf("\n  **************************  LOGIN TO CONTINUE  **************************  ");
    printf(" \n\n\t\t\t||ENTER USERNAME:-");
	scanf("%s", &uname); 
	printf(" \n\t\t\t||ENTER PASSWORD:-");
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


