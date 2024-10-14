import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsDataComponent } from './pokemons-data.component';

describe('PokemonsDataComponent', () => {
  let component: PokemonsDataComponent;
  let fixture: ComponentFixture<PokemonsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonsDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
