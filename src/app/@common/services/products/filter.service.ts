import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private readonly filterStore = signal<string | null>(null);
  filter = computed(() => this.filterStore());
  setFilter(value: string | null) {
    this.filterStore.set(value);
  }
  clearFilter() {
    this.setFilter(null);
  }
}
