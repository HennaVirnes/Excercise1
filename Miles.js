
// This has been modified in the ConflictA branch 
//I modify line three!!!

// Miles.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-11-21 File created.   2016-11-21 Last modification.

/*  The result of the calculation is printed in four different
    ways in this program.
    
    It seems that you cannot format much with the standard
    util.format() function.

    HERE is a new modification for ConflictB

*/ 
const tools = require( "./externals/tools.js" ) ; // for sprintf() and printf()

process.stdout.write( "\n  This program prints conversion tables." 
                   +  "\n\n       m = miles to kilometers"
                   +  "\n       k = kilometers to miles"
                   +  "\n       p = pounds to kilograms"
                   +  "\n       x = exit"
                   +  "\n\n Type a letter to select a conversion table: ") ;

process.stdin.on( "data", function( input_from_user )
{
var given_letter  =  String( input_from_user ).charAt( 0 ) ;

if (given_letter == "m" || given_letter =="M")
    {
    process.stdout.write("\n      miles" + "      kilometers")
    var distance_in_miles = 10
    var distance_in_kilometers ;
        while ( distance_in_miles <= 110 )
        {
        distance_in_kilometers = distance_in_miles * 1.6093
        tools.printf( "\n %10.2f %10.2f",
        distance_in_miles, distance_in_kilometers ) ;
        distance_in_miles = distance_in_miles + 10 ;
        }   
    }

if (given_letter == "k"|| given_letter == "K")
    {
    process.stdout.write( "\n    kilometers" + "    miles");
    var distance_in_kilometers = 10
    var distance_in_miles ;
        while (distance_in_kilometers <= 110 )
        {
            distance_in_miles = distance_in_kilometers / 1.6093
            tools.printf("\n %10.2f %10.2f",
            distance_in_kilometers, distance_in_miles);
            distance_in_kilometers = distance_in_kilometers + 10;
        }
    } 
if (given_letter == "p" || given_letter == "P")
    {
    process.stdout.write( "\n    pounds" + "    kilograms");
    var weight_in_pounds = 10 
    var weight_in_kilograms ;
        while (weight_in_pounds <= 110 )
        {
            weight_in_kilograms = weight_in_pounds * 0.4536
            tools.printf("\n %10.2f %10.2f",
            weight_in_pounds, weight_in_kilograms);
            weight_in_pounds = weight_in_pounds + 10;
        } 
    }                
if (given_letter == "x" || given_letter == "X")
   {
    process.exit() ;
   }
   
process.stdout.write("\n\n m = miles to kilometers"
                    +  "\n k = kilometers to miles"
                    +  "\n p = pounds to kilograms"
                    +  "\n x = exit"
                    +  "\n\n Type a letter to select a conversion table: ") ;   
} ) ;
