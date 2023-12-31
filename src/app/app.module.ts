import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { IngredientComponent } from './shopping-list/ingredient/ingredient.component';
import { ShoppingItemsComponent } from './shopping-list/shopping-items/shopping-items.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-book/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { FormsModule } from '@angular/forms';
import { ExercisesComponent } from './exercises/exercises.component';
import { GamecontrolComponent } from './exercises/gamecontrol/gamecontrol.component';
import { OddComponent } from './exercises/odd/odd.component';
import { EvenComponent } from './exercises/even/even.component';
import { Background } from './Directives/SetBackground.directive';
import { BetterDirectiveDirective } from './Directives/better-directive.directive';
import { ButtonToggleDirective } from './Directives/button-toggle.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    IngredientComponent,
    ShoppingItemsComponent,
    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    CockpitComponent,
    ServerElementComponent,
    ExercisesComponent,
    GamecontrolComponent,
    OddComponent,
    EvenComponent,
    Background,
    BetterDirectiveDirective,
    ButtonToggleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
