import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProductObject } from '../Shared/interfaces';
import ProductsService from '../Shared/Service/products.service';
import { UserDetailsService } from '../Shared/Service/user-details.service';
import { ColDef, GridApi } from 'ag-grid-community';
import { CustomCellComponent } from './custom-cell/custom-cell.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  sub!: Subscription;
  productObservable?:Observable<ProductObject[]>
  
  rowData:any=[]
  private gridApi!: GridApi;

  ColumnDefs:ColDef[]=[
    {
        headerName: "Product Name", 
        field:"title",  
        cellRenderer: CustomCellComponent, 
        cellRendererParams: {
            rendering:'title'
        },
        initialWidth:400,
        flex:1,
        cellStyle:{
          'height': '100%',
          'display': 'flex ',
        
          'align-items': 'center ',
        }
    },
    {
      headerName: "Price",
      field:"price", 
      cellRenderer: CustomCellComponent, 
        cellRendererParams: {
            rendering:'price'
        },
      cellStyle:{
        'height': '100%',
        'display': 'flex ',
      
        'align-items': 'center ',
      }
    },
    {
      headerName:"",
      field:"id",
     
      cellRenderer: CustomCellComponent,
      cellRendererParams:{
         rendering:'addToCartButton'
      },
      initialWidth: 150,
     
      cellStyle:{
        'height': '100%',
        'display': 'flex ',
        'align-items': 'center ',
      }

    }
  ]

 

  public defaultColDef: ColDef = {
    initialWidth: 100,
    sortable: true,
  };

  constructor(private productService:ProductsService,private userService:UserDetailsService) {}

  ngOnInit(): void {
     this.productObservable=this.productService.getProductList();
  }
  
}


