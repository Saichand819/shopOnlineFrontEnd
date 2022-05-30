import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsComponent ]
    })
    .compileComponents();
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should value format the price column',fakeAsync(()=>{
    component.rowData = [
      {
        id :1,
        title: 'Guillermo',
        
        price: 5.9999
      }
    ];
    
    const elemInnerText = fixture.elementRef
  
    console.log("hey", elemInnerText.nativeElement.childNodes[1].childNodes, fixture)
    // expect(elemInnerText).toBe('$ 5.999')
  })
  )
});
