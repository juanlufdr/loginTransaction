import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsComponent } from './transactions.component';

describe('TransactionsComponent', () => {
  let component: TransactionsComponent;
  let fixture: ComponentFixture<TransactionsComponent>;
  var dom = document.getElementsByTagName('app-transactions');
  let de;
  let el;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ TransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
    el = de.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('default order mode should be descendant', () => {
    expect(component.selected).toBe('desc');
  })

  it('colums table should be 6', () => {
    expect(component.displayedColumns.length).toBe(6);
  })
  
  it('data property should be initialize', () => {
    expect(component.data).toBeTruthy();
  })

  it('search text should be empty string', () => {
    expect(component.searchText).toBe('');
  })

  it('Order section should be named correctly', () => {
    expect(el.textContent).toContain('Order by:');
  })
});
