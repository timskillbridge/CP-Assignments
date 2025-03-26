
from __future__ import annotations
import time
import subprocess

def clearScreen():
    subprocess.run('clear',shell=True)

welcome_screen_message = [
[" 1. List All Students"],
[" 2. View Individual Student by ID"],
[" 3. Add a Student"],
[" 4. Remove a Student"],
{" 5. Quit"}
]


def print_menu(school:School):
    clearScreen()
    print(f"                Welcome to {school.name}!!\n\n")
    for e,f in enumerate(welcome_screen_message):
        for a,b in enumerate(f):   
            for c,d in enumerate(b):
                print(f'{b[0:c]}', end='\r')  # Print and overwrite the same line  
                time.sleep(.01)  # Pause for 1 second
            print(f"{b[1:]}") #<--- cuts off the space from the whole word so the final print of the full word doesn't stick ouu.

    getInput = input("\n\nPlease select a menu item: ")

    match getInput:
        case "1":
            print(school.list_students())
        case "2":
            getId = input("Which Student ID: ")

            print(school.list_students(getId))
        case "3":
            pass
        case "4":
            pass
        case "5":
            pass
